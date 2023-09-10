export declare class MessagesService {
    createMessage(content: {
        message: string;
    }): {
        role: string;
        content: string;
    }[];
    createChainMessage(content: {
        message: string;
    }): any[];
}
