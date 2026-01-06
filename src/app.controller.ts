import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get(':code')
  async redirectByCode(
    @Param('code') code: string,
    @Res() res: Response,
  ) {
    const originalUrl = await this.appService.handleRedirect(code);
    return res.redirect(originalUrl);
  }
}
