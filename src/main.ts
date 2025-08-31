import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import session from 'express-session';


async function bootstrap() {


  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'my-secret-key', // change this in production!
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 }, // 1 minute for testing
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
