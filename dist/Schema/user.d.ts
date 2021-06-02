import { Schema, Document } from "mongoose";
export interface User extends Document {
    email: string;
    password: string;
}
export declare const UserSchema: Schema;
export interface UsernameUser extends User {
    username: string;
}
export declare const UsernameUserSchema: Schema;
export interface FullNameUser extends User {
    firstName: string;
    lastName: string;
}
export declare const FullNameUserSchema: Schema;
