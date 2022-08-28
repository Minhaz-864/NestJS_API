import { Body, Controller, Post } from '@nestjs/common';
import {
  checkRegistration,
  loginDTO,
  productListDTO,
} from 'src/DTO/dtoCheck.dto';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  Register( @Body() dto: checkRegistration ): {} {
    
    return this.userService.create(dto);
   
  }

  @Post('login')
  Login(@Body() dto: loginDTO): {} {
    return this.userService.login(dto);
  }

  @Post('products')
  yourProducts(@Body() productDTO: productListDTO): {} {
    return this.userService.products(productDTO);
  }
}
