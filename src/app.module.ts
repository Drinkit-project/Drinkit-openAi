import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { AiService } from './ai/ai.service';
import { ConfigModule } from '@nestjs/config/dist';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), MessagesModule],
  controllers: [AppController],
  providers: [AppService, AiService],
})
export class AppModule {}
