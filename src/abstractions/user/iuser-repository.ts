import { User } from 'src/user/user';

export abstract class IUserRepository {
    abstract getAll(): Promise<User[]> 
    abstract getById(id: string): Promise<User>
    abstract create(user: User): Promise<User>
    abstract update(id: string, user: User): Promise<User>
    abstract getByEmail(email:string)
    abstract delete(id: string): Promise<void>
}