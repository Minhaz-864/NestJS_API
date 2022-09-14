import { IsString } from "class-validator";

export class courseRegistration {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    class_of: string;

    @IsString()
    faculty: string;

    @IsString()
    section: string;


}