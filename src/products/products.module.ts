import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { logger } from "src/middlewares/functional.middleware";
import { validateLoginmiddlware } from "src/middlewares/validateLogin.middleware";
import { ProductController } from "./products.controller";
import { productSchema } from "./products.model";
import { ProductService } from "./products.service";

@Module({
    imports: [MongooseModule.forFeature([{name: "Product", schema: productSchema}])],
    controllers: [ProductController],
    providers: [ProductService]
})

export class ProductModule implements NestModule{
    configure(consumer: MiddlewareConsumer){
        consumer.apply(validateLoginmiddlware)
        .exclude({
            path: 'api/products',
            method: RequestMethod.POST
        })
        .forRoutes(ProductController)
        
    }
}