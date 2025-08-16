import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  greetings(): string {
    return 'Hello, Welcome to my Blog!';
  }
}
