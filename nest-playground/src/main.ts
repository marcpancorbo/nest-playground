import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({})
  app
    .listen(3000)
    .then(() => console.log('stared on port 3000'))
    .catch((err) => console.log(err));
}
bootstrap();
