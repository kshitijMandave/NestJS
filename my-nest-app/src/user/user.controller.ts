/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('user')
// @ means this is a special function, and we call it a decorator.
// and it's a controller decorator. that means it's saying treact this class as a controller.
// and conroller means a function that handles http requests.
export class UserController {
  // @Get() Decorator
  @Get()
  // getUser() is Method it's special method cause Get providing metadata
  getUser() {
    return 'user data fetched successfully';
  }
}
