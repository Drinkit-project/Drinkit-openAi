import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  createMessage(content: { message: string }) {
    const message = [{ role: 'user', content: content.message }];
    return message;
  }
}
