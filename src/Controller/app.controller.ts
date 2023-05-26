import { Controller, Post } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { AppService } from '../Service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Cron('*/10 * * * * *')
  @Post()
  getHello(): string {
    return this.appService.getHello();
  }
}
