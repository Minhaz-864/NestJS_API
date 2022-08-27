import { Controller, Post, Body, Get, Param, Delete, Put } from "@nestjs/common";

import { ProductService } from "./products.service";
@Controller('api/products')
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
    (@Param('id') prodId: string, @Body('title') prodTitle: string, @Body('description') prodDesc: string, @Body('price') prodPrice: number, @Body('user') userinfo: string ){
        return this.productService.editProduct(prodId, prodTitle, prodDesc, prodPrice, userinfo);
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