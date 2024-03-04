
import { Injectable } from '@nestjs/common';
import { Tool } from './tool';
import { IToolRepository } from 'src/abstractions/class/itool-repository';

@Injectable()
export class ToolService {
   
    constructor(
        private readonly repository: IToolRepository
        ) {}
        

    async getAll(): Promise<Tool[]> {
        const tools = await this.repository.getAll();
        return tools.map(tool => ({
            title: tool.title ,
            link: tool.link,
            description: tool.description,
            tags: tool.tags}))
    }
     
    async findByWord( word: string): Promise<Tool[]> {
        const tools = await this.repository.getAll()
        const filteredTools = tools.filter(tool => 
            tool.title !== undefined && 
            tool.link !== undefined && 
            tool.description !== undefined && 
            tool.tags !== undefined
            )
        
        return filteredTools.filter(tool => 
            tool.title.toLowerCase().includes(word) ||
            tool.link.toLowerCase().includes(word) ||
            tool.description.toLowerCase().includes(word) ||
            tool.tags.some(tag => tag.toLowerCase().includes(word))
        )
       
    }

    async getById(id: string): Promise<Tool> {
        return this.repository.getById(id);
    }

    async create(tool: Tool): Promise<Tool> {
        const tools = await this.repository.getAll();
        const existingTool = tools.find(word => word.title === tool.title)
        const lengthDescription = tool.description.length > 256


        if (existingTool) {
            throw new Error('Tool already exists');
        }
        if (lengthDescription) {
            throw new Error('Description longer than 256 characters');
        }

        return this.repository.create(tool);
    }

    async update(id: string, tool: Tool) {
        const tools = await this.repository.getAll();
        const existingTool = tools.find(word => word.title === tool.title)
        const lengthDescription = tool.description.length > 256


        if (existingTool) {
            throw new Error('Tool already exists');
        }
        if (lengthDescription) {
            throw new Error('Description longer than 256 characters');
        }
         return this.repository.update(id, tool);
    }
    
    async delete(id: string):Promise<void> {
        await this.repository.delete(id);
    }
}
