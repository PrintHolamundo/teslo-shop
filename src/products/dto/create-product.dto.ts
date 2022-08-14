import {
    IsArray,
    IsIn,
    IsInt,
    IsOptional,
    IsPositive,
    IsString,
    MinLength,
} from 'class-validator';

export class CreateProductDto {
    @IsString()
    @MinLength(1)
    title: string;

    @IsString()
    @IsOptional()
    price?: number;

    @IsString()
    @IsOptional()
    description?: string;

    @IsInt()
    @IsPositive()
    @IsOptional()
    slug?: string;

    @IsOptional()
    stock?: number;

    @IsString({ each: true })
    @IsArray()
    sizes: string[];

    @IsIn(['men', 'women', 'kid', 'unisex'])
    gender: string;
}
