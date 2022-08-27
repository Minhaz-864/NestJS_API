import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { validateLoginmiddlware } from 'src/middlewares/validateLogin.middleware';
import { validateOthermiddlware } from 'src/middlewares/validateOther.middle';
import { UsersController } from './users.controller';
import { userSchema } from './users.model';
import { UsersService } from './users.service';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: userSchema }])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer){
    consumer.apply( validateLoginmiddlware, validateOthermiddlware )
    .forRoutes({
      path: 'users/login',
      method: RequestMethod.POST
    })
    /* we could do this for a whole controller
      .forRoutes(UsersController)

      we could simply exclude some as well
      .exclude({path: 'users/some-route-to-exclude', method: RequestMethod.GET})
      .forRoutes(UsersController)
    */
  }

}
