import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SignInService } from './sign-in.service';
import { CreateSignInDto } from './dto/create-sign-in.dto';
import { UpdateSignInDto } from './dto/update-sign-in.dto';

@Controller('sign-in')
export class SignInController {
  constructor(private readonly signInService: SignInService) {}

  @Post()
  create(@Body() createSignInDto: CreateSignInDto) {
    return this.signInService.create(createSignInDto);
  }

  @Get()
  findAll() {
    return this.signInService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.signInService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSignInDto: UpdateSignInDto) {
    return this.signInService.update(+id, updateSignInDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.signInService.remove(+id);
  }
}
