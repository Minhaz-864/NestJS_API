import { Body, Controller, Get, Post } from '@nestjs/common';
import { Request, request } from 'express';
import { courseRegistration } from './courses.dto';
import { CoursesService } from './courses.service';

@Controller('api/courses')
export class CoursesController {
    constructor (private courseService : CoursesService){}


    @Post()
    create(@Body() dto: courseRegistration){
        return this.courseService.create(dto);
    }

    @Get()
    show():{}{
        return this.courseService.show()
    }
}
