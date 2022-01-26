import { Injectable } from '@nestjs/common';
import { CreateSignInDto } from './dto/create-sign-in.dto';
import { UpdateSignInDto } from './dto/update-sign-in.dto';

@Injectable()
export class SignInService {
  create(createSignInDto: CreateSignInDto) {
    return 'This action adds a new signIn';
  }

  findAll() {
    return `This action returns all signIn`;
  }

  findOne(id: number) {
    return `This action returns a #${id} signIn`;
  }

  update(id: number, updateSignInDto: UpdateSignInDto) {
    return `This action updates a #${id} signIn`;
  }

  remove(id: number) {
    return `This action removes a #${id} signIn`;
  }
}
