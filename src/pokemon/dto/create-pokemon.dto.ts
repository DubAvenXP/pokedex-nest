import { IsNumber, IsPositive, IsString, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsNumber()
  @IsPositive()
  readonly no: number;

  @IsString()
  @MinLength(1)
  name: string;
}
