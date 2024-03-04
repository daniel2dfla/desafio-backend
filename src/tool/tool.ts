import { Document } from "mongoose";

export class ToolInMongo extends Document {
    title: string;
    link: string;
    description: string;
    tags: string[];
}

export type Tool = {
    title: string;
    link: string;
    description: string;
    tags: string[];
}
