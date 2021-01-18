import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthSignUpDto } from 'src/auth/dto/auth-signup.dto';
import { Repository } from 'typeorm';
import { Users } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private readonly usersRepository: Repository<Users>) {}

    findOne(id: number): Promise<Users | undefined> {
        return this.usersRepository.findOne(id)
    }

    findByEmail(email: string) {
        return this.usersRepository.findOne({ email })
    }

    create(createUserDto: AuthSignUpDto): Promise<Users> {
        const user = new Users()
        
        user.email = createUserDto.email
        user.password = createUserDto.password;
    
        return this.usersRepository.save(user)
    }
}
