import { Injectable } from '@nestjs/common';
import { CreateRequest, UpdateRequest } from '../interfaces/userRequest';
import { UserDto } from '../dtos/user.dtos';
import { UserRepository } from '../repositories/user.repository';
import { UserInterestRepository } from '../repositories/userInterest.repository';
import { Responses } from '../traits/Response';
import { Validator } from '../traits/Validator';

@Injectable()
export class UserService {

    constructor(
        private readonly userRepository: UserRepository,
        private readonly userInterestRepository: UserInterestRepository
    ) { }

    public async create(request: CreateRequest) {
        try {
            const userDto: UserDto = {
                name: request.name,
                dni: request.dni,
                phone: request.phone,
                city: request.city,
                province: request.province
            }

            const userValidator = new Validator().fields(userDto);

            if (!userValidator.status) throw Error('Fields required <' + JSON.stringify(userValidator.fields) + '>');

            let user = await this.userRepository.findByDni(request.dni);

            if (!user) user = await this.userRepository.create(userDto);
            
            await this.userInterestRepository.deleteInterestByUserId(user.id);

            request.interests.map(async (interest: string) => {
                await this.userInterestRepository.create(user.id, interest);
            });

            return new Responses().success('Created successfully', request);
        } catch (error) {
            throw error;
        }
    }

    public async find() {
        try {
            const users = await this.userRepository.findAll();

            return new Responses().success('Query successfully', users);
        } catch (error) {
            throw error;
        }
    }

    public async findById(userId: string) {
        try {
            return new Responses().success('Query user by Id', await this.userRepository.findById(userId))
        } catch (error) {
            throw error;
        }
    }

    public async delete(userId: number) {
        try {
            return new Responses().success('Deleted successfully', await this.userRepository.delete(userId));
        } catch (error) {
            throw error;
        }
    }

    public async update(request: UpdateRequest, userId: string) {
        try {
            const userDto: UserDto = {
                name: request.name,
                dni: request.dni,
                phone: request.phone,
                city: request.city,
                province: request.province
            }

            const userValidator = new Validator().fields(userDto);

            if (!userValidator.status) throw Error('Fields required <' + JSON.stringify(userValidator.fields) + '>');

            const user = await this.userRepository.findById(userId);
            
            if (!user) throw Error('User not found');

            return new Responses().success('Update successfully', await this.userRepository.update(userDto, userId));
        } catch (error) {
            throw error;
        }
    }

}