import { Injectable, Session } from '@nestjs/common';

const username = 'admin';
const password = 'admin1234'

@Injectable()
export class AppService {
  greetings(): string {
    return 'Hello, Welcome to my Blog!';
  }

  login(@Session() session: Record<string, any>,
    loginUSername: string, loginPassword: string){
    if(loginUSername === username && loginPassword === password){
      session.user = { username, role: 'admin' };
      return{
        'status': "logged in",
        'message': "login successful"
      }
    }
  }
}
