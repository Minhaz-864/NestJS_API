import { Injectable, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { getToken } from 'src/middlewares/validateLogin.middleware';
import { Courses } from './courses.model';

@Injectable()
export class CoursesService {

    constructor(
        @InjectModel('Course') private readonly courseModel: Model<Courses>,
        private jwtService: JwtService
    ) { }

    async create(dto: {
        name: string,
        description: string,
        class_of: string,
        faculty: string,
        section: string,
        }) {
            let userToken = getToken()
        const { name, description, class_of, faculty, section } = dto;
        try {

            const verify = this.jwtService.verify(userToken);
            //console.log(verify)
            const newCourse = new this.courseModel({
                name, description, class_of, faculty, section, created_by: verify.user.email
            })
            await newCourse.save();
            return newCourse;
            
        } catch (error) {
            //console.log(error)
            if(error.code == 11000){
                throw new NotAcceptableException("Duplicate Entry Detected!")
            }
            throw new NotAcceptableException("Verification error")
        }


    }

    async show(){
        const courses = await this.courseModel.find();
        return  {...courses};
    }

    async 
}
