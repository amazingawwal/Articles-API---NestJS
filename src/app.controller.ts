import { Controller, Get, Post, Body, Session } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginDto } from './article/dto/login.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.greetings();
  }

  @Post("/login")
  login(@Body() loginDto: LoginDto,
  @Session() session: Record<string, any>
){
    return this.appService.login(loginDto.username, loginDto.password, session);
  }
}


