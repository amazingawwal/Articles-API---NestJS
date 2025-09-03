import { Injectable } from '@nestjs/common';

const username = 'admin';
const password = 'admin1234'

@Injectable()
export class AppService {
  greetings(): string {
    return 'Hello, Welcome to my Blog!';
  }

  login(
    loginUSername: string, loginPassword: string, session: Record<string, any>){
    if(loginUSername === username && loginPassword === password){
      session.user = { username, role: 'admin' };
      console.log(`SESSION: ${session} and USER:${session.user.username} and lastly ROLE:${session.user.role}`)
      return{
        'status': "logged in",
        'message': "login successful"
      }
    }
  }
}
