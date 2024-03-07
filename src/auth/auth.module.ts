import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthUserSchema } from '../abstractions/schemas/user.schema';
import { JwtStrategy } from './jwt.strategy';
import { MongoUserRepository } from 'src/abstractions/database/user-repository';
import { IUserRepository } from 'src/abstractions/class/iuser-repository';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt'}),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          secret: config.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: config.get<number>('JWT_EXPIRES'),
          },
        };
      }
    }),
    MongooseModule.forFeature([{ name: 'User', schema: AuthUserSchema}])
  ],
  controllers: [AuthController],
  providers: [{
    provide: IUserRepository,
    useClass: MongoUserRepository
    },
    AuthService, 
    JwtStrategy
  ],
  exports: [
    JwtStrategy, 
    PassportModule
  ]
})
export class AuthModule {}
