import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortenedModule } from './shortened/shortened.module';

@Module({
  imports: [ShortenedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
