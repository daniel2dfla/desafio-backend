import { Users } from 'src/user/user';

export abstract class IUserRepository {
    abstract getAll(): Promise<Users[]> 
    abstract getById(id: string): Promise<Users>
    abstract create(user: Users): Promise<Users>
    abstract update(id: string, user: Users): Promise<Users>
    abstract getByEmail(email:string)
    abstract delete(id: string): Promise<void>
}