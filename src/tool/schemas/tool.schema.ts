import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNotEmpty, IsString } from "class-validator";
import { Document } from "mongoose";

@Schema()
export class ToolSchema extends Document {
   @Prop(String)
   @IsNotEmpty()
   @IsString()
   title: string;

   @Prop(String)
   @IsString()
   link: string;

   @Prop(String)
   @IsString()
   description: string;

   @Prop(Array)
   @IsString()
   tags: string[];   
}
export const PostSchema = SchemaFactory.createForClass(ToolSchema);
