import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class ShortenedService implements OnModuleInit {
  private nanoid: () => string;

  async onModuleInit() {
    // Dynamically import nanoid (ES Module)
    const { customAlphabet } = await import('nanoid');

    // Base62 alphabet: 0-9, A-Z, a-z
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    // Create nanoid generator with 10 characters length
    this.nanoid = customAlphabet(alphabet, 10);
  }

  async *generateShortenedUrlsStream(
    _originalUrl: string,
    count: number,
  ): AsyncGenerator<string> {
    for (let i = 0; i < count; i++) {
      const shortId = this.nanoid();
      yield shortId;
    }
  }
}

