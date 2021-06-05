import { Response, Request } from "express";
import { Model } from "mongoose";
export declare function createData(req: Request, res: Response, model: Model<any>, params: any): Promise<Response<any, Record<string, any>>>;
export declare function checkRequired(req: Request, res: Response, model: Model<any>, params: any, returnString: string): Promise<Response<any, Record<string, any>> | "">;
export declare function getOneData(req: Request, res: Response, model: Model<any>, params: any, returnString?: string): Promise<Response<any, Record<string, any>>>;
export declare function deleteData(req: Request, res: Response, model: Model<any>, params: any, returnString?: string, modelReturn?: string): Promise<Response<any, Record<string, any>>>;
