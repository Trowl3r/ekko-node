import { Model } from "mongoose";
import { IUser, IUsernameUser, IFullNameUser } from "../Schema/user";
export declare const User: Model<IUser>;
export declare const UsernameUser: Model<IUsernameUser>;
export declare const FullNameUser: Model<IFullNameUser>;
export declare function setUsermodelName(name?: string): Model<IUser>;
export declare function setUsernamemodelName(name?: string): Model<IUsernameUser>;
export declare function setFullnamemodelName(name?: string): Model<IFullNameUser>;
