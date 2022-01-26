import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignInModule } from './sign-in/sign-in.module';
import { UserModule } from './user/user.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [SignInModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
