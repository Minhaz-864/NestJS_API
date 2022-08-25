import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductController } from "./products.controller";
import { productSchema } from "./products.model";
import { ProductService } from "./products.service";

@Module({
    imports: [MongooseModule.forFeature([{name: "Product", schema: productSchema}])],
    controllers: [ProductController],
    providers: [ProductService]
})

export class ProductModule{}