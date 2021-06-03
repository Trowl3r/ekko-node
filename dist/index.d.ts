/// <reference types="express" />
/// <reference types="mongoose" />
import { enRouter } from "./server/server";
declare const server: {
    createServer: (middlewareString?: string[]) => import("express").Express;
    enRouter: typeof enRouter;
};
declare const routes: {
    route: {
        testRoute: typeof import("./routes/generics").testRoute;
    };
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
export { server, db, schema, routes };
