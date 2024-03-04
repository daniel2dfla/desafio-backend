import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostUserSchema } from './schemas/user.schema';
import { IUserRepository } from 'src/abstractions/class/iuser-repository';
import { MongoUserRepository } from 'src/abstractions/database/user-repository';

@Module({
      imports: [
            MongooseModule.forFeature([{ name: 'User', schema: PostUserSchema}])
      ],
      controllers: [UserController],
      providers: [ 
            {
                  provide:IUserRepository,
                  useClass: MongoUserRepository
            },
            UserService,
      ],
      exports: [UserService],
})
export class UserModule {}