import { ConfigService } from '@nestjs/config';
export declare class AiService {
    private readonly configService;
    private readonly openai;
    constructor(configService: ConfigService);
    chat(message: any): Promise<string>;
    chatChain(message: any): Promise<string>;
}
