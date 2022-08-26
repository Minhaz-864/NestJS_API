import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    password: string,
  ) {
    const userCheck = await this.userModel.findOne({ email: email });
    console.log(userCheck);
    if (!userCheck) {
      const newUser = new this.userModel({
        firstname,
        lastname,
        email,
        phone,
        password,
      });
      await newUser.save();

      return newUser.id;
    }

    return { message: 'User Exists. Please login with your credentials.' };
  }
}
