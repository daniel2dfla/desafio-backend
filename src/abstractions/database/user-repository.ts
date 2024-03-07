import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserRepository } from '../class/iuser-repository';
import { User } from 'src/auth/schemas/user.schema';
import { SignupDto } from 'src/auth/dto/signup.dto';
import { LoginDto } from 'src/auth/dto/login.dto';
import { DeleteDto } from 'src/auth/dto/delete-dto';

@Injectable()
export class MongoUserRepository implements IUserRepository {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}
    
    async getAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async signup(signUpDto: SignupDto): Promise<User> {
        const newUser = new this.userModel(signUpDto)
        return newUser.save()
    }

    async login(loginDto: LoginDto): Promise<User> {
        const { email } = loginDto
        return this.userModel.findOne({email}).exec();
    }

    async delete(deleteDto: DeleteDto){
        await this.userModel.deleteOne(deleteDto);
    }

    async deleteAll(){
        await this.userModel.deleteMany();
    }
    
}