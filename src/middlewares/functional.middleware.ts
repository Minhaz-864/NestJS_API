import { NextFunction, Request, Response } from "express";
let value = "";
export function logger(req: Request, res: Response, next: NextFunction){
   
    next();
}

export function getValue() {
    return value;
}