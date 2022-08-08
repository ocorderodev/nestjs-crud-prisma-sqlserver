import { Injectable } from '@nestjs/common';
import { UserInterests } from '@prisma/client';
import { PrismaService } from '../services/prisma.service';
import { UserInterestDto } from '../dtos/userInterest.dto';

@Injectable()
export class UserInterestRepository {

    constructor(private prisma: PrismaService) { }

    async create(userId: number, title: string): Promise<any> {
        return this.prisma.$queryRaw`EXECUTE CREATE_USER_INTERESTS ${userId}, ${title}`;
    }

    async deleteInterestByUserId(userId: number) : Promise<any> {
        return this.prisma.$queryRaw`EXECUTE DELETE_INTEREST_BY_USERID ${userId}`;
    }

    async findByUser(userId: number) : Promise<UserInterests[]> {
        return this.prisma.userInterests.findMany({
            where: {
                userId
            }
        });
    }

    async findByUserProcedure(userId: number) : Promise<any> {
        return this.prisma.$queryRaw`EXECUTE FIND_INTERESTS_BY_USER ${userId};`;
    }

}