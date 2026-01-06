import { IsUrl, IsInt, Min, Max } from 'class-validator';

export class CreateShortenedDto {
  @IsUrl({}, { message: 'Invalid URL format' })
  url: string;

  @IsInt({ message: 'Count must be an integer' })
  @Min(1, { message: 'Count must be at least 1' })
  @Max(10000, { message: 'Count cannot exceed 10000' })
  count: number;
}

