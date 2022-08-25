import { Controller, Post, Body, Get, Param, Delete, Put } from "@nestjs/common";
import { get } from "http";
import { userInfo } from "os";

import { ProductService } from "./products.service";
@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) { }
    @Post()
    addProduct
        (@Body('title') prodTitle: string, @Body('description') prodDesc: string, @Body('price') prodPrice: number, @Body('user') userInfo: string)
        : {} {
        
        return this.productService.insertProduct(prodTitle, prodDesc, prodPrice, userInfo);
    }

    @Put(':id')
    editProduct
    (@Param('id') prodId: string, @Body('title') prodTitle: string, @Body('description') prodDesc: string, @Body('price') prodPrice: number ){
        return this.productService.editProduct(prodId, prodTitle, prodDesc, prodPrice);
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string){

        return this.productService.getSingle(prodId)
    }

    @Get()
    getProducts()
    :{ }
    { return this.productService.getProducts(); }

    @Delete(':id')
    deleteProduct(@Param('id') prodId: string):{}{
        return this.productService.deleteOne(prodId)
    }

}