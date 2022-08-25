import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';

@Injectable()
export class UsersService {
    /*TYPICAL USER FUNCTIONS
    1)REGISTRATION -->CREATE
    2)LOGIN
    3)UPDATE INFO -->EDIT
    4)DELETE USER -->DELETE
    5)CALL SINGLE USER INFO --> SINGLE
    
    */
    constructor(@InjectModel('User') private readonly userModel : Model<User>){}

    async create(
        firstName : string, 
        lastName : string, 
        email : string, 
        phone : string, 
        address : string, 
        password : string, 
        role: string
        ){
            //finish by bycrypting password field and matching both passwords
            
           const newUser = new this.userModel({firstName, lastName, email, phone, address, password, role}) 
           await newUser.save();

           return newUser.id;
        }
    async login(){
        //create login functions
    }
    async single(uid: string){

    }
    async delete(uid: string){}
    async edit
        (id: string,
        firstName : string, 
        lastName : string, 
        email : string, 
        phone : string, 
        address : string, 
        password : string, 
        role: string)
        {}
}
