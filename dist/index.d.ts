/// <reference types="mongoose" />
import { userModels } from "./models/index";
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
export { server, db, schema, userModels };
