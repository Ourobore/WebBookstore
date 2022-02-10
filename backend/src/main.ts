import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BooksModule } from './books/books.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Setting up OpenAPI document
  const config = new DocumentBuilder()
    .setTitle('WebBookstore')
    .setDescription('The WebBookstore API description')
    .setVersion('1.0')
    // .addTag('books')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Starting up the server
  const PORT: number = 3000;
  await app.listen(PORT);
  console.log(`\n-> Server started on port ${PORT}\n`);
}
bootstrap();
