import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './app/modules/user.module';
import { PrismaModule } from './app/modules/prisma.module';

@Module({
  imports: [
    UserModule,
    PrismaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
