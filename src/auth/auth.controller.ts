import { Body, Controller, Post, Get, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { DeleteDto } from './dto/delete-dto';
import { User } from './schemas/user.schema';
import { Users } from './user';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Get()
    async getAll(): Promise<Users[]> {
        return this.authService.getAll();
    }

    @Post('/signup')
    async signup(@Body() signUpDto: SignupDto) {
        return this.authService.signUp(signUpDto)
    }

    @Get('/login')
    async login(@Body() loginDto: LoginDto){
        return this.authService.login(loginDto)
    }

    @Delete('/delete')
    async delete(@Body() deleteDto: DeleteDto): Promise<void> {
        return this.authService.delete(deleteDto);
    }

    @Delete('/deleteAll')
    async deleteAll(): Promise<void> {
        return this.authService.deleteAll();
    }
   
}
