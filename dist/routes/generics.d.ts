import { Response } from "express";
export declare function testRoute(req: Request, res: Response): (test: string) => Response<any, Record<string, any>>;
