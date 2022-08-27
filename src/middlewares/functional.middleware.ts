import { NextFunction, Request, Response } from "express";
let value = "";
export function logger(req: Request, res: Response, next: NextFunction){
    console.log("functional");
    value = req.headers.connection;
    next();
}

export function getValue() {
    return value;
}