
import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TaskModule, UsersModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class AppModule {}
