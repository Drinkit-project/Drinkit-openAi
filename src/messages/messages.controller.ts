import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from 'src/ai/ai.service';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(
    private readonly aiService: AiService,
    private readonly messagesService: MessagesService,
  ) {}

  @Post()
  async createMessage(@Body() content: { message: string }) {
    const message = this.messagesService.createMessage(content);
    const msg = await this.aiService.chat(message);
    return msg;
  }
  @Post('/chain')
  async createChainMessage(@Body() content: { message: string }) {
    const messages = this.messagesService.createChainMessage(content);
    const msg = await this.aiService.chatChain(messages);
    return msg;
  }
}
