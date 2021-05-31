declare const server: {
    createServer: (middlewareString?: string[]) => import("express-serve-static-core").Express;
};
export { server };
