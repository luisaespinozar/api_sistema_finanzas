import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  });

  app.use(bodyParser.json({ limit: '1024mb' }));
  app.use(bodyParser.urlencoded({ limit: '1024mb', extended: true }));

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
