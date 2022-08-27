import { IsEmail, IsNotEmpty, IsString, Matches, MinLength } from "class-validator";
import { Match } from "./match.dacorator";

export class loginDTO{
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}

export class checkRegistration{
    @IsString()
    firstname: string;

    @IsString()
    lastname: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    phone: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsString()
    @MinLength(6)
    @Match('password')
    password_confirm: string;
    

}