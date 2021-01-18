import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthSignUpDto } from './dto/auth-signup.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}
    
    @Post('/signin')
    login(@Body() authLoginDto: AuthLoginDto) {
        return this.authService.login(authLoginDto)
    }

    @Post('/signup')
    signUp(@Body() authSignUpDto: AuthSignUpDto) {
        return this.authService.signUp(authSignUpDto)
    }
}
