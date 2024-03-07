import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ToolService } from './tool.service';
import { Tool } from './tool';
import { AuthGuard } from '@nestjs/passport';

@Controller('tools')
export class ToolController {

    constructor (private readonly toolService : ToolService) {}
    
    @Get()
    @UseGuards(AuthGuard())
    async getAll() : Promise<Tool[]>  {
        return this.toolService.getAll();
    }
    
    @Get('rota/:word')
    @UseGuards(AuthGuard())
    async findByWord( @Param('word') word: string) : Promise<Tool[]>  {
        return this.toolService.findByWord(word);
    }

    @Get(':id')
    @UseGuards(AuthGuard())
    async getById(@Param('id') id:string) : Promise<Tool>  {
        return this.toolService.getById(id);
    }

    @Post()
    @UseGuards(AuthGuard())
    async create(@Body()  tool: Tool) : Promise<Tool>  {
        return this.toolService.create(tool);
    }
    
    @Put(':id')
    @UseGuards(AuthGuard())
    async update(@Param('id') id:string, @Body()  tool: Tool): Promise<Tool> {
        return this.toolService.update(id, tool);
    }

    @Delete(':id')
    @UseGuards(AuthGuard())
    async delete(@Param('id') id:string) {
        return this.toolService.delete(id);
    }

    @Delete()
    async deleteAll() {
        return this.toolService.deleteAll();
    }

}