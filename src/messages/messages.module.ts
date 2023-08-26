import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { AiService } from 'src/ai/ai.service';
import { ConfigService } from '@nestjs/config/dist';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, AiService, ConfigService],
})
export class MessagesModule {}
