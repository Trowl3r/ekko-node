import { Schema, Document } from "mongoose";
/*****    BASIC USER MODEL    ********/
export interface IUser extends Document {
    email: string;
    password: string;
}
export declare const UserSchema: Schema;
/*****    USERNAME USER MODEL    ********/
export interface IUsernameUser extends IUser {
    username: string;
}
export declare const UsernameUserSchema: Schema;
/*****    FULLNAME USER MODEL    ********/
export interface IFullNameUser extends IUser {
    firstName: string;
    lastName: string;
}
export declare const FullNameUserSchema: Schema;
