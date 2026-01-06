import { Module } from '@nestjs/common';
import { ShortenedController } from './shortened.controller';
import { ShortenedService } from './shortened.service';

@Module({
  controllers: [ShortenedController],
  providers: [ShortenedService],
})
export class ShortenedModule {}

