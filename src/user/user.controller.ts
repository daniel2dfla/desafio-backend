import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Users } from './user';
import { UserService } from './user.service';

@Controller("user")
export class UserController {

    constructor (private readonly userService: UserService){}

    @Get()
    async getAll(): Promise<Users[]>{
        return this.userService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Users>{
        return this.userService.getById(id);
    }

    @Post()
    async create(@Body() user: Users): Promise<Users>{
        return this.userService.create(user);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() user: Users): Promise<Users>{
        return this.userService.update(id, user);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return this.userService.delete(id);
    }
}