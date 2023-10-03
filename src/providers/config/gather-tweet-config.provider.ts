import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import loadConfigs from 'common/config';

const envFilePath = [`${process.cwd()}/.env.${process.env.NODE_ENV}`];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath,
      load: loadConfigs,
    }),
  ],
})
export class GatherTweetConfigModule {}
