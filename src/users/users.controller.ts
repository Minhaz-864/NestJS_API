import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    /*TYPICAL USER FUNCTIONS
    1)REGISTRATION -->CREATE
    2)LOGIN
    3)UPDATE INFO -->EDIT
    4)DELETE USER -->DELETE
    5)CALL SINGLE USER INFO --> SINGLE
    
    */

    constructor(private userService: UsersService) { }

    @Post()
    createUser
        (
            @Body('firstname') firstName: string, 
            @Body('lastname') lastName: string, 
            @Body('email') email: string, 
            @Body('phone') phone: string,
            @Body('address') address: string, 
            @Body('password') password: string, 
            @Body('role') role: string, 
            )
        : {} {
            //registration
            //password match here else throw error
            //encrypt inside service --> reference old code.
            
        return this.userService.create(firstName, lastName, email, phone, address, password, role);
    }

    @Put(':id')
    editUser
        (@Param('id') id: string, 
        @Body('firstname') firstName: string, 
        @Body('lastname') lastName: string, 
        @Body('email') email: string, 
        @Body('phone') phone: string,
        @Body('address') address: string, 
        @Body('password') password: string, 
        @Body('role') role: string ) {
            //edit user
        return this.userService.edit(id, firstName, lastName, email, phone, address, password, role);
    }

    @Get(':id')
    getUser(@Param('id') userId: string) {
        //single user info
        return this.userService.single(userId)
    }

    @Post()
    getUsers()
        : {} { 
            //login user
            return this.userService.login(); }

    @Delete(':id')
    deleteUser(@Param('id') userId: string): {} {
        //delete user info
        return this.userService.delete(userId)
    }

}
