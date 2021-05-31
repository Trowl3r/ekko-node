/// <reference types="mongoose" />
declare const server: {
    createServer: (middlewareString?: string[]) => import("express-serve-static-core").Express;
};
declare const database: {
    connectDB: (mongoURI: string, options?: import("mongoose").ConnectOptions) => Promise<void>;
};
export { server, database };
