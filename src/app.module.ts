import { Module } from '@nestjs/common';

import { AuthsModule } from 'api/auths/auths.module';
import { UsersModule } from 'api/users/users.module';

import { GatherTweetConfigModule } from 'providers/config/gather-tweet-config.provider';

@Module({
  imports: [
    // Module Providers
    GatherTweetConfigModule,

    // api Modules
  ],
})
export class AppModule {}
