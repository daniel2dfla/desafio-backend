import { Tool } from "src/tool/tool";


export abstract class IToolRepository {
    abstract getAll(): Promise<Tool[]> 
    abstract findByWord(word: string): Promise<Tool[]>
    abstract getById(id: string): Promise<Tool>
    abstract create(tool: Tool): Promise<Tool>
    abstract update(id: string, user: Tool): Promise<Tool>
    abstract getByEmail(email:string)
    abstract delete(id: string): Promise<void>
}