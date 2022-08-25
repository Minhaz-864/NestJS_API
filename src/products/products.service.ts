import { Injectable, NotFoundException, NotAcceptableException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Product } from "./products.model";

@Injectable()
export class ProductService {
    private products: Product[] = [];

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
        console.log(prodID)
        return await this.productModel.findOne({_id:prodID})
    }

    async deleteOne(prodId: string) {
        
        const deleteInfo = await this.productModel.deleteOne({_id: prodId})
        
        if(deleteInfo.deletedCount > 0){

            return { message: "successfully deleted" }
        }
        throw new NotAcceptableException("Delete Stopped Abruptly") 
        
    }

    editProduct(prodId: string, title: string, desc: string, price: number) {
      
        // const editableProduct = this.productModel.findOneAndUpdate;
        // title ? editableProduct.title = title : editableProduct.title = editableProduct.title
        // desc ? editableProduct.description = desc : editableProduct.description = editableProduct.description
        // price ? editableProduct.price = price : editableProduct.price = editableProduct.price

     


        return {message: "Successful update!"}

    }

    private findProduct(Id: string)
        : [{}, number] {
        const prodIndex = this.products.findIndex((prod) => prod.id === Id)
        const singleProduct = this.products[prodIndex]
        if (!singleProduct) {
            throw new NotFoundException('Nope! this is wrong.')
        }

        return [singleProduct, prodIndex];
    }

}