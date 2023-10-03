import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export default function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('GatherTWeet')
    .setDescription('The GatherTWeet API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}
