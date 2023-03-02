import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PORT } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Users API')
    .setDescription(
      'Create users, posts and profiles in seconds with our easy to use REST API! Customize profiles and automate the creation of quality content. Additionally, our REST API is ideal for testing in development environments, saving you time and effort creating and managing test users and content. Best of all, our API is Open-Source. Save time and increase efficiency in your development projects with our REST API! Try our API today.',
    )
    .setVersion('1.0')
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/', app, document, {
    explorer: false,
    swaggerOptions: {
      filter: false,
      showRequestDuration: true,
    },
  });

  await app.listen(PORT);
}
bootstrap();
