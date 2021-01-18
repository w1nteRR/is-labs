import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import { AuthLoginDto } from './dto/auth-login.dto'
import { AuthSignUpDto } from './dto/auth-signup.dto'

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async login(userLoginDto: AuthLoginDto) {
        const isUser = await this.usersService.findByEmail(userLoginDto.email)
        
        if(isUser && isUser.password === userLoginDto.password) {
            const payload = { 
                email: userLoginDto.email, 
                sub: userLoginDto.sub 
            }

            return {
                access_token: this.jwtService.sign(payload)
            }
        }

        return {
            message: 'Wrong email or password'
        }
    }

    async signUp(userSignUpDto: AuthSignUpDto) {
        const isUser = await this.usersService.findByEmail(userSignUpDto.email)

        if(isUser) return {
            message: 'User exists already'
        }

        await this.usersService.create(userSignUpDto)

        return {
            message: 'User created'
        }
    }
}
