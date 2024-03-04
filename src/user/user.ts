import { Document } from "mongoose";

export class User extends Document{
    name: string;
    email: string;
    password: string;
}

export type Users = {
    name: string;
    email: string;
}