import { IUserRepository } from 'src/abstractions/user/iuser-repository';
import { User } from './user';


export class UserService {
    
    constructor(private readonly repository: IUserRepository) {}

    async getAll(): Promise<User[]> {
        return this.repository.getAll();
    };

    async getById(id: string): Promise<User> { 
        return this.repository.getById(id);
    }

    async getByEmail(email: string) { 
        return this.repository.getByEmail(email);
    }
    
    async create(user: User) {
        return this.repository.create(user);
    }

    async update(id: string, user: User) {
        return this.repository.update(id, user)
    }

    async delete(id: string) {
        await this.repository.delete(id);
    }
}