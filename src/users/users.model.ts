import * as mongoose from "mongoose";

export const userSchema =new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String},
    address: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, default: "master"},
    created_at: {type:String, default:Date()},
    updated_at: {type:String, default: "00:00:00"}
})

export interface User {
    
        id: string; 
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        address: string,
        password: string; 
        role: string; 
        created_at : string;
        updated_at : string;
}