
import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express'

@Controller()
export class TestController {

    @Get('/')
    index (@Req() request: Request, @Res() response: Response) {
        console.log(request.url)
        response.status(200).json({
            message: 'Hola mundo',
        })
    }
}
