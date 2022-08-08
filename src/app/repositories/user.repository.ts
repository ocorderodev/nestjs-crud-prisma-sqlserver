import { Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import { PrismaService } from '../services/prisma.service';
import { UserDto } from '../dtos/user.dtos';

@Injectable()
export class UserRepository {

    constructor(private prisma: PrismaService) { }

    async create(userDto: UserDto) : Promise<any> {
        const { name, dni, phone, city, province } = userDto;
        const query = await this.prisma.$queryRaw`EXECUTE CREATE_USER ${name}, ${dni}, ${phone}, ${city}, ${province}`;
        return query[0];
    }

    async findAll() : Promise<Users[]> {
        return this.prisma.users.findMany({
            select: {
                id: true,
                name: true,
                dni: true,
                phone: true,
                city: true,
                province: true,
                UserInterests: {
                    select: {
                        title: true
                    }
                }
            }
        });
    }

    async findById(userId: string) : Promise<Users> {
        return await this.prisma.users.findFirst({
            where: {
                id: parseInt(userId)
            },
            include: {
                UserInterests: {
                    select: {
                        title: true
                    }
                }
            }
        });
    }

    async findByDni(dni: string) : Promise<Users> {
        return await this.prisma.users.findFirst({ 
            where: { 
                dni 
            } 
        });
    }

    async delete(userId: number) : Promise<Users> {
        return await this.prisma.$queryRaw`EXECUTE DELETE_USER_BY_ID ${userId};`;
    }

    async update(userDto: UserDto, userId: string) {
        const { name, dni, phone, city, province } = userDto;
        return await this.prisma.$queryRaw`EXECUTE UPDATE_USER ${userId}, ${name}, ${dni}, ${phone}, ${city}, ${province}`;
    }

}