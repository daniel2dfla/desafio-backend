import { Document } from "mongoose";

export class ToolInMongo extends Document {
    id: string;
    title: string;
    link: string;
    description: string;
    tags: string[];
}

export type Tool = {
    id: string;
    title: string;
    link: string;
    description: string;
    tags: string[];
}
