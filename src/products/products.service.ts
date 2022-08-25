import { Injectable, NotFoundException, NotAcceptableException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Product } from "./products.model";

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel : Model<Product> ){}

    async insertProduct(title: string, description: string, price: number, user: string)  {
        const newProduct = new this.productModel({title, description, price, user})
        await newProduct.save();
        console.log(newProduct);
        return newProduct.id;
    }

    async getProducts() {
        return await this.productModel.find().exec();
    }

    async getSingle(prodID: string) {
        try {
            
            const product = await this.productModel.findOne({_id:prodID});
            if(product){
    
                return product; 
            }
        } catch (error) {
            
            throw new NotAcceptableException("Product Lost ;-;")
        }
    }

    async deleteOne(prodId: string) {
        try {
            const deleteInfo = await this.productModel.deleteOne({_id: prodId})
            
            if(deleteInfo.deletedCount > 0){
    
                return { message: "successfully deleted" }
            }
            
        } catch (error) {
            
            throw new NotAcceptableException("Delete Stopped Abruptly") 
        }
        
    }

    async editProduct(prodId: string, title: string, desc: string, price: number, user: string) {
        
        const updateable = {
            title: title,
            description: desc,
            price: price,
            updated_at: Date()
        }

        const data = await this.productModel.findByIdAndUpdate(prodId, { $set: updateable})
        console.log(data);


        return {message: "Successful update!"}

    }

}