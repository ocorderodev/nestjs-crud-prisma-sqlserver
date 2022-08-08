import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class UserDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    name: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(8)
    dni: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(9)
    phone: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    city: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    province: string

}