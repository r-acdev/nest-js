
import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller()
export class UsersController {

    //Importarto el service
    constructor(private usersService: UsersService) {}

    //Inyecto la funcion
    @Get('/users')
    getUsers() {
        return this.usersService.getUsers()
    }

}
