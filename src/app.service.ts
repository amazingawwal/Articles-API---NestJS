import { Injectable } from '@nestjs/common';

const username = 'admin';
const password = 'admin1234'

@Injectable()
export class AppService {
  greetings(): string {
    return 'Hello, Welcome to my Blog!';
  }

  login(loginUSername: string, loginPassword: string){
    if(loginUSername === username && loginPassword === password){
      return{
        'status': "logged in",
        'message': "login successful"
      }
    }
  }
}
