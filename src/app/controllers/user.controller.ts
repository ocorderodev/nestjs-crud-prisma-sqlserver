import { Controller, Post, Get, Put, Delete, Param, Body, Res, Req } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { Responses } from '../traits/Response';

@Controller('/v1/users')
export class UserController {

    constructor(
        private readonly userService: UserService
    ) { }

    @Post()
    public async create(@Req() request, @Res() response) {
        try {
            return response.status(200).json(await this.userService.create(request.body));
        } catch (error) {
            return response.status(500).json(new Responses().error('Error in the process', {
                message: error.message,
                stack: error.stack
            }));
        }
    }

    @Get()
    public async find(@Res() response) {
        try {
            return response.status(200).json(await this.userService.find());
        } catch (error) {
            return response.status(500).json(new Responses().error('Error in the process', {
                message: error.message,
                stack: error.stack
            }));
        }
    }

    @Get('/:userId')
    public async findById(@Param('userId') userId: string, @Res() response) {
        try {
            return response.status(200).json(await this.userService.findById(userId));
        } catch (error) {
            return response.status(500).json(new Responses().error('Error in the process', {
                message: error.message,
                stack: error.stack
            }));
        }
    }

    @Delete('/:userId')
    public async delete(@Param('userId') userId: number, @Res() response) {
        try {
            return response.status(200).json(await this.userService.delete(userId));
        } catch (error) {
            return response.status(500).json(new Responses().error('Error in the process', {
                message: error.message,
                stack: error.stack
            }));
        }
    }

    @Put('/:userId')
    public async update(@Param('userId') userId: string, @Req() request, @Res() response) {
        try {
            return response.status(200).json(await this.userService.update(request.body, userId));
        } catch (error) {
            return response.status(500).json(new Responses().error('Error in the process', {
                message: error.message,
                stack: error.stack
            }));
        }
    }

}