import { Module } from '@nestjs/common';
import { AppController } from '../Controller/app.controller';
import { AppService } from '../Service/app.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
