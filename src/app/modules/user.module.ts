import { Module } from '@nestjs/common';
import { UserController } from 'src/app/controllers/user.controller';
import { UserRepository } from '../repositories/user.repository';
import { UserInterestRepository } from '../repositories/userInterest.repository';
import { UserService } from '../services/user.service';
import { PrismaModule } from './prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [UserController],
    providers: [UserService, UserRepository, UserInterestRepository],
})

export class UserModule { }