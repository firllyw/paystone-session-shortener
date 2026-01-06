import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async handleRedirect(code: string): Promise<string> {
    // Tracking
    // await axios.post(`https://marketing-service.io/trackurl/${code}`);

    const originalUrl = await this.findOriginalUrl(code);

    if (!originalUrl) {
      throw new NotFoundException('URL not found');
    }

    return originalUrl;
  }

  private async findOriginalUrl(code: string): Promise<string | null> {
    // Query by code
    return null;
  }
}