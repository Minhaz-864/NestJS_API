import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";


@Injectable()
export class validateLoginmiddlware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        console.log("console log something");
        console.log(req.headers);
        next();
    }
}