
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';


@Controller()
export class UsersController {

    //Importarto el service
    constructor(private usersService: UsersService) {}

    //Inyecto la funcion
    @Get('/users')
    getUsers() {
        return this.usersService.getUsers()
    }

    @Post('/users')
    createUser(@Body() user: CreateUserDto) {
        return this.usersService.createUser(user)
    }
}
