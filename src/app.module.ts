import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make environment variables available globally
      envFilePath: '.env',
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    TodosModule,
  ],
})
export class AppModule {}
