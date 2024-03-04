import { ToolController } from './tool.controller';
import { ToolService } from './tool.service';
import { Module } from '@nestjs/common';
import {  PostSchema } from './schemas/tool.schema'
import { MongooseModule } from '@nestjs/mongoose';
import { IToolRepository } from 'src/abstractions/class/itool-repository';
import { MongoToolRepository } from 'src/abstractions/database/tool-repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Tool', schema: PostSchema}])
  ],
  controllers: [ToolController],
  providers: [
    {
      provide: IToolRepository,
      useClass: MongoToolRepository
    },
    ToolService
  ],
  exports: [ToolService]
})
export class ToolModule {}
