import { Controller, Post, Body, Res } from '@nestjs/common';
import type { Response } from 'express';
import { ShortenedService } from './shortened.service';
import { CreateShortenedDto } from './dto/create-shortened.dto';

@Controller('v1/shortened')
export class ShortenedController {
  constructor(private readonly shortenedService: ShortenedService) {}

  @Post()
  async create(
    @Body() createShortenedDto: CreateShortenedDto,
    @Res() res: Response,
  ): Promise<void> {
    // Set headers for streaming JSON array
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Transfer-Encoding', 'chunked');

    // Start the JSON array
    res.write('[');

    const stream = this.shortenedService.generateShortenedUrlsStream(
      createShortenedDto.url,
      createShortenedDto.count,
    );

    let isFirst = true;

    for await (const shortUrl of stream) {
      if (!isFirst) {
        res.write(',');
      }
      res.write(JSON.stringify(shortUrl));
      isFirst = false;
    }

    // Close the JSON array
    res.write(']');
    res.end();
  }
}

