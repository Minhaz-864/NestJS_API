import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(
    dto: {firstname: string, lastname: string, email: string, phone: string, password: string, password_confirm: string}
    ) {
      console.log(dto);
      const {firstname, lastname, email, phone, password, password_confirm} = dto;
    const userCheck = await this.userModel.findOne({ email: email });
    // console.log(userCheck);
    if (!userCheck) {
      const newUser = new this.userModel({
        firstname,
        lastname,
        email,
        phone,
        password,
      });
      await newUser.save();

      return { id : newUser.id , jwt: "token"};
    
    }
    return { message: 'User Exists. Please login with your credentials.' };
   
  }

  async login(dto: {email:string, password: string}){
    console.log(dto)
    const {email, password} = dto;
    const user = await this.userModel.findOne({email:email});
    if(!user) return {message : "Wrong User Credentials"}
    if(user.password == password){

      await this.userModel.findByIdAndUpdate(user.id, {$set:{last_log: Date()}})
      user.password = null
      return {message: "login success", user: user};
    }
    return {message: "wrong password"};
  }
}
