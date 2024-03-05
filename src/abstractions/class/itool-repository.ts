import { Tool, ToolInMongo } from "src/tool/tool";


export abstract class IToolRepository {
    abstract getAll(): Promise<ToolInMongo[]> 
    abstract findByWord(word: string): Promise<ToolInMongo[]>
    abstract getById(id: string): Promise<ToolInMongo>
    abstract create(tool: Tool): Promise<ToolInMongo>
    abstract update(id: string, user: Tool): Promise<ToolInMongo>
    abstract getByEmail(email:string)
    abstract delete(id: string): Promise<void>
    abstract deleteAll(): Promise<void>
}