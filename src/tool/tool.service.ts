import { BadRequestException, Injectable } from '@nestjs/common';
import { Tool } from './tool';
import { IToolRepository } from 'src/abstractions/class/itool-repository';

@Injectable()
export class ToolService {
  constructor(private readonly repository: IToolRepository) {}

  async getAll(): Promise<Tool[]> {
    return this.repository.getAll();
    
  }

  async findByWord(word: string): Promise<Tool[]> {
    if(word === undefined || word === null) {
        throw new BadRequestException('Word is required');
    }
    const tools = await this.repository.findByWord(word);
    
    if(tools.length === 0 || tools == undefined){
        return []
    }
    return tools
  }

  async getById(id: string): Promise<Tool> {
    return this.repository.getById(id);
  }

  async create(tool: Tool): Promise<Tool> {
    await this.validateTool(tool);
    return this.repository.create(tool)
  }

  async update(id: string, tool: Tool) {
    await this.validateTool(tool);
    return  this.repository.update(id, tool);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async deleteAll(): Promise<void> {
    await this.repository.deleteAll();
  }

  private async validateTool(tool: Tool): Promise<void> {
    const tools = await this.repository.getAll();
    const existingTool = tools.find((word) => word.title === tool.title);
    const lengthDescription = tool.description.length > 256;
    const tagsLength = tool.tags.length <= 0 || tool.tags.length > 8;

    if (existingTool) {
      throw new BadRequestException('Tool already exists');
    }
    if (lengthDescription) {
      throw new BadRequestException('Description longer than 256 characters');
    }
    if (tagsLength) {
      throw new BadRequestException('Tags does not exist or number of tags greater than 8');
    }
  }
}
