import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Product } from 'src/products/products.model';

import { User } from './users.model';

const saltOrRounds = 10;

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    @InjectModel('Product') private readonly productModel: Model<Product>,
    private jwtService: JwtService
  ) { }

  async create(dto: {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
    password_confirm: string;
  }) {

    const { firstname, lastname, email, phone, password, password_confirm } =
      dto;
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
      const Password_hash = await bcrypt.hash(password, saltOrRounds);
      newUser.password = Password_hash
      const payload = {
        user: newUser
      }
      const token = this.jwtService.sign(payload, { expiresIn: "24h" })
      newUser.token = token

      await newUser.save();

      return { token: token };
    }
    return { message: 'User Exists. Please login with your credentials.' };
  }

  async login(dto: { email: string; password: string }) {
    console.log(dto);
    const { email, password } = dto;
    const user = await this.userModel.findOne({ email: email });
    if (!user) return { message: 'Wrong User Credentials' };

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch)
    if (isMatch) {
      await this.userModel.findByIdAndUpdate(user.id, {
        $set: { last_log: Date() },
      });
      user.password = null;
      const payload = {
        user: user
      }
      const token = this.jwtService.sign(payload, { expiresIn: "24h" })
      console.log(token);

      return { message: 'login success', token: token };
    }
    return { message: 'wrong password' };
  }

  async products(dto: { email: string, token: string }) {


    const userProducts = await this.productModel.find(dto);
    console.log(userProducts);
  }
}
