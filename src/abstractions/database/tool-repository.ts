import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IToolRepository } from '../class/itool-repository';
import { Tool, ToolInMongo } from 'src/tool/tool';
// import { User } from '../schemas/user.schema';


@Injectable()
export class MongoToolRepository implements IToolRepository {
    
    constructor(@InjectModel('Tool') private toolModel: Model<ToolInMongo>) {};

    async getAll() {
        const findAll =  await this.toolModel.find().exec();
        return findAll.map((tool) => {
            return this.adaptTool(tool)
        })
    }

    async findByWord(word: string){
        const findWord = this.toolModel.find({ $or: [
            {title: { $regex: word, $options: 'i' }},
            {link: { $regex: word, $options: 'i' }},
            {description: { $regex: word, $options: 'i' }},
            {tags: { $regex: word, $options: 'i' }}
        ] }).exec();
        
        return (await findWord).map((tool) => {
            return this.adaptTool(tool)
        })
    }
   
    async getById(id: string) { 
        const findId = await this.toolModel.findById(id).exec();
        return this.adaptTool(findId)
    }
    
    async create(tool: ToolInMongo) {
        const newTool = await new this.toolModel(tool).save();
        return this.adaptTool(newTool);
    }

    async update(id: string, tool: ToolInMongo) {
        const updateTool = await this.toolModel.findByIdAndUpdate({_id: id}, tool).exec();
        return this.adaptTool(updateTool);
    }

    async delete(id: string) {
        await this.toolModel.deleteOne({_id: id}).exec();
    }

    async deleteAll() {
        await this.toolModel.deleteMany().exec();
    }

    private adaptTool(idTool: ToolInMongo): Tool {
        return {
          id: idTool._id,
          title: idTool.title,
          link: idTool.link,
          description: idTool.description,
          tags: idTool.tags,
        };
      }
}