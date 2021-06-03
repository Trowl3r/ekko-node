/// <reference types="mongoose" />
import { setUsermodelName, setUsernamemodelName, setFullnamemodelName } from "./user";
export declare const userModels: {
    User: import("mongoose").Model<import("../Schema/user").IUser, {}, {}>;
    UsernameUser: import("mongoose").Model<import("../Schema/user").IUsernameUser, {}, {}>;
    FullNameUser: import("mongoose").Model<import("../Schema/user").IFullNameUser, {}, {}>;
    setUsermodelName: typeof setUsermodelName;
    setUsernamemodelName: typeof setUsernamemodelName;
    setFullnamemodelName: typeof setFullnamemodelName;
};
