import { Schema, Document } from "mongoose";
export interface IUser extends Document {
    email: string;
    password: string;
}
export declare const UserSchema: Schema;
export interface IUsernameUser extends IUser {
    username: string;
}
export declare const UsernameUserSchema: Schema;
export interface IFullNameUser extends IUser {
    firstName: string;
    lastName: string;
}
export declare const FullNameUserSchema: Schema;
