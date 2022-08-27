import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middlewares/functional.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    skipMissingProperties: true,
    forbidUnknownValues: true,
    stopAtFirstError: false,
    whitelist: true
  }));

  // app.enableCors()
  app.use(logger);
  await app.listen(3000);
}
bootstrap();
