import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;
  @IsString()
  model: string;
  @IsNumber()
  @IsOptional() //オプショナルを許可
  price: number;
  @IsString()
  @IsOptional()
  userName: string;
  @IsString()
  @IsOptional()
  userNum: string;
  @IsString()
  @IsOptional()
  userBelongto: string;
  @IsString()
  @IsOptional()
  destination: string;
}
