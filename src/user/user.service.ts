import { IUserRepository } from 'src/abstractions/class/iuser-repository';
import { Users } from './user';
import { Injectable } from '@nestjs/common';


@Injectable()
export class UserService {
    
    constructor(private readonly repository: IUserRepository) {}

    async getAll(): Promise<Users[]> {
        const users = await this.repository.getAll();
        return users.map(user => ({
                name: user.name,
                email: user.email
            }))
    };

    async getById(id: string): Promise<Users> { 
        const user = await this.repository.getById(id);
        return {
            name: user.name,
            email: user.email
        }
    }

    async getByEmail(email: string) { 
        const emails = await this.repository.getByEmail(email);
        return {
            name: emails.name,
            email: emails.email
        }
    }
    
    async create(user: Users) {
        return this.repository.create(user);
    }

    async update(id: string, user: Users) {
        return this.repository.update(id, user)
    }

    async delete(id: string) {
        await this.repository.delete(id);
    }
}