import { AiService } from 'src/ai/ai.service';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    private readonly aiService;
    private readonly messagesService;
    constructor(aiService: AiService, messagesService: MessagesService);
    createMessage(content: {
        message: string;
    }): Promise<string>;
    createChainMessage(content: {
        message: string;
    }): Promise<string>;
}
