import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IToolRepository } from '../class/itool-repository';
import { ToolInMongo } from 'src/tool/tool';


@Injectable()
export class MongoToolRepository implements IToolRepository {
    
    constructor(@InjectModel('Tool') private toolModel: Model<ToolInMongo>) {};

    async getAll() {
        return this.toolModel.find().exec();
    }

    async findByWord() {
        return this.toolModel.find().exec();
    }
   

    async getById(id: string) { 
        return this.toolModel.findById(id).exec();
    }

    async getByEmail(email: string) { 
        return this.toolModel.findOne({ email }).exec();
    }
    
    async create(tool: ToolInMongo) {
        const newTool = new this.toolModel(tool);
        return newTool.save();
    }

    async update(id: string, tool: ToolInMongo) {
        return this.toolModel.findByIdAndUpdate({_id: id}, tool).exec();
    }

    async delete(id: string) {
        await this.toolModel.deleteOne({_id: id}).exec();
    }

    async deleteAll() {
        await this.toolModel.deleteMany().exec();
    }
}