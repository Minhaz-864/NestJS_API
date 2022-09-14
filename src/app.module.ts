import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { CoursesController } from './courses/courses.controller';
import { CoursesService } from './courses/courses.service';
import { CoursesModule } from './courses/courses.module';
import { StudentsController } from './students/students.controller';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    ProductModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/testDB'),
    CoursesModule,
    StudentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
