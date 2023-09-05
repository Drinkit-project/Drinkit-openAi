import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  createMessage(content: { message: string }) {
    const message = [{ role: 'user', content: content.message }];
    return message;
  }

  createChainMessage(content: { message: string }) {
    const messages = [];
    for (let i = 0; i < content.message.length; i++) {
      if (i % 2 == 0) {
        messages.push({ role: 'user', content: content.message[i] });
      } else {
        messages.push({ role: 'assistant', content: content.message[i] });
      }
    }

    return messages;
  }
}
