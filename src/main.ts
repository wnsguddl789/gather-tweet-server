import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import setupSwagger from './setupSwagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.enableCors({
    origin: configService.get('app.originDomain'),
    credentials: true,
  });
  setupSwagger(app);

  await app.listen(configService.get('app.apiServerPort'));
}
bootstrap();
