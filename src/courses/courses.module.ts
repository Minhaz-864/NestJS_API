import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { validateLoginmiddlware } from 'src/middlewares/validateLogin.middleware';
import { CoursesController } from './courses.controller';
import { courseSchema } from './courses.model';
import { CoursesService } from './courses.service';


@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Course', schema: courseSchema }]),
        JwtModule.register({ secret: "AgIvEnSeCrEt" })
    ],
    controllers: [CoursesController],
    providers: [CoursesService]
})
export class CoursesModule implements NestModule{

    configure(consumer: MiddlewareConsumer) {
        consumer.apply(validateLoginmiddlware)
        .forRoutes({
            path: 'api/courses',
            method: RequestMethod.POST
        })
    }
 }
