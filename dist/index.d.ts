/// <reference types="mongoose" />
declare const server: {
    createServer: (middlewareString?: string[]) => import("express-serve-static-core").Express;
};
declare const db: {
    connectDB: (mongoURI: string, options?: import("mongoose").ConnectOptions) => Promise<void>;
};
declare const schema: {
    userSchemas: {
        UserSchema: import("mongoose").Schema<import("mongoose").Document<any, any>, import("mongoose").Model<any, any, any>, undefined>;
        UsernameUserSchema: import("mongoose").Schema<import("mongoose").Document<any, any>, import("mongoose").Model<any, any, any>, undefined>;
        FullNameUserSchema: import("mongoose").Schema<import("mongoose").Document<any, any>, import("mongoose").Model<any, any, any>, undefined>;
    };
};
declare const models: {
    userModels: {
        User: import("mongoose").Model<import("./Schema/user").IUser, {}, {}>;
        UsernameUser: import("mongoose").Model<import("./Schema/user").IUsernameUser, {}, {}>;
        FullNameUser: import("mongoose").Model<import("./Schema/user").IFullNameUser, {}, {}>;
        setUsermodelName: typeof import("./models/user").setUsermodelName;
        setUsernamemodelName: typeof import("./models/user").setUsernamemodelName;
        setFullnamemodelName: typeof import("./models/user").setFullnamemodelName;
    };
};
export { server, db, schema, models };
