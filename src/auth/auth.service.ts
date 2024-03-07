import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { DeleteDto } from './dto/delete-dto';
import { IUserRepository } from 'src/abstractions/class/iuser-repository';
import { Users } from './user';

@Injectable()
export class AuthService {
    constructor(
        private repository: IUserRepository,
        private jwtService: JwtService
        ) {}
            
    async getAll(): Promise<Users[]> {
        const users = await this.repository.getAll();
        return users.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email
        }))
    }

    async signUp(signUpDto: SignupDto): Promise<{token: string}>{
        const user = await this.repository.getAll()
        const existingEmail = user.find(e => e.email === signUpDto.email);

        if(existingEmail) {
            throw new UnauthorizedException('This email is already registered')
        }

        const { name, email, password } = signUpDto;

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await this.repository.signup({
            name,
            email,
            password: hashedPassword
        })
        const token = this.jwtService.sign({ id: newUser.id })

        return {token}
    }
        
    async login(loginDto: LoginDto){
        const {  email, password } = loginDto;
        const user = await this.repository.login({
            email,
            password
        })
        if(!user) {
            throw new UnauthorizedException('Invalid email')
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password)

        if(!isPasswordMatched) {
            throw new UnauthorizedException('Invalid password')
        }

        const token = this.jwtService.sign({ id: user.id })

        return { 
            token,
            name: user.name,
            email: user.email,
        }
    }

    async delete(deleteDto: DeleteDto): Promise<void> {
        await this.repository.delete(deleteDto);
    }

    async deleteAll(): Promise<void> {
        await this.repository.deleteAll();
    }
}