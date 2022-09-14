import * as mongoose from "mongoose";

export const productSchema =new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    user: {type: String, required: true},
    tags: {type: [], default: []},
    created_at: {type:String, default:Date()},
    updated_at: {type:String, default: "00:00:00"}
})

export interface Product {
    
        id: string; 
        title: string; 
        description: string; 
        price: number;
        user: string;
        tags: [];
        created_at : string;
        updated_at : string;
}