
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    // context es la informacion de la peticion
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean>
  {
    const request = context.switchToHttp().getRequest() as Request;
    console.log(request.url); // retorne la url

    if(!request.headers['authorization']) return false;

    return true;
  }
}
