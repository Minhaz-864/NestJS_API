import { Body, Controller, NotAcceptableException, Post } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  Register(
    @Body('firstname') firstname: string,
    @Body('lastname') lastname: string,
    @Body('email') email: string,
    @Body('phone') phone: string,
    @Body('password') password: string,
    @Body('password_confirm') password_confirm: string,
  ): {} {
    if (password_confirm == password) {
      return this.userService.create(
        firstname,
        lastname,
        email,
        phone,
        password,
      );
    }

    throw new NotAcceptableException('Password Confirm Doesnt Match');
  }
}
