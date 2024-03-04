import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/user';
import { IUserRepository } from '../class/iuser-repository';

@Injectable()
export class MongoUserRepository implements IUserRepository {
    

    constructor(@InjectModel('User') private userModel: Model<User>) {};

    async getAll() {
        return this.userModel.find().exec();
    }

    async getById(id: string) { 
        return this.userModel.findById(id).exec();
    }

    async getByEmail(email: string) { 
        return this.userModel.findOne({ email }).exec();
    }
    
    async create(user: User) {
        const newUser = new this.userModel(user);
        return newUser.save();
    }

    async update(id: string, user: User) {
        return this.userModel.findByIdAndUpdate({_id: id}, user).exec();
    }

    async delete(id: string) {
        await this.userModel.deleteOne({_id: id}).exec();
    }
}