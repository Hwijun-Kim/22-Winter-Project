import { PartialType } from '@nestjs/mapped-types';
import { CreateSignInDto } from './create-sign-in.dto';

export class UpdateSignInDto extends PartialType(CreateSignInDto) {}
