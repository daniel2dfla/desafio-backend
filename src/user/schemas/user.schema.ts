import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {  IsNotEmpty, IsString } from "class-validator";
import { Document } from "mongoose";

@Schema()
export class UserSchema extends Document {
    @Prop(String)
   @IsNotEmpty()
   @IsString()
   name: string;

   @Prop(String)
   @IsString()
   email: string;

   @Prop(String)
   @IsString()
   password: string;
}

export const PostUserSchema = SchemaFactory.createForClass(UserSchema);