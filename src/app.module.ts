import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';  // Ensure this path is correct
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: parseInt('3306'),
      username: 'root',
      password: '',
      database: 'nestcurd',
      entities: [User],  // Add your entities here
      synchronize: true,  // Set to false in production
    }),
    UserModule,
  ],
})
export class AppModule {}
