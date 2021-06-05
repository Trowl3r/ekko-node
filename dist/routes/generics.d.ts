import { Response, Request } from "express";
import { Model } from "mongoose";
export declare function createData(req: Request, res: Response, model: Model<any>, params: any): Promise<Response<any, Record<string, any>>>;
