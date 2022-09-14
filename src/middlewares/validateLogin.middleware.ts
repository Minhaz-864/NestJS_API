import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

let token: string = " "
@Injectable()
export class validateLoginmiddlware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        //console.log(req.headers);
        token = req.headers['x-auth-token'].toString()
        next();
    }
}

export function getToken(){
    return token;
}