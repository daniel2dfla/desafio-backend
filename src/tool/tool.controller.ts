import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ToolService } from './tool.service';
import { Tool } from './tool';

@Controller('tools')
export class ToolController {

    constructor (private readonly toolService : ToolService) {}
    
    @Get()
    async getAll() : Promise<Tool[]>  {
        return this.toolService.getAll();
    }

    @Get('rota/:word')
    async findByWord( @Param('word') word: string) : Promise<Tool[]>  {
        return this.toolService.findByWord(word);
    }

    @Get(':id')
    async getById(@Param('id') id:string) : Promise<Tool>  {
        return this.toolService.getById(id);
    }

    @Post()
    async create(@Body()  tool: Tool) : Promise<Tool>  {
        return this.toolService.create(tool);
    }
    
    @Put(':id')
    async update(@Param('id') id:string, @Body()  tool: Tool): Promise<Tool> {
        return this.toolService.update(id, tool);
    }

    @Delete(':id')
    async delete(@Param('id') id:string) {
        return this.toolService.delete(id);
    }

}