import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'https://drinkit.site', // 허용할 도메인
    credentials: true, // 요청에 쿠키 정보를 함께 보냄
  });

  await app.listen(3000);
}
bootstrap();
