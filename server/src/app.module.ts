import { Inject, MiddlewareConsumer, NestModule ,Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import * as RedisStore from 'connect-redis';
import * as session from 'express-session';
import * as passport from 'passport';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProjectModule } from './projects/project.module';
import { RedisModule } from './storage/redis.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { REDIS } from './storage/redis.constants';

@Module({
  imports: [
    RedisModule,
    ProjectModule,
    AuthenticationModule,
    MikroOrmModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
    constructor(@Inject(REDIS) private readonly redis: RedisStore.Client) {}
    configure(consumer: MiddlewareConsumer) {
      consumer 
        .apply(
          session({
            store: new(RedisStore(session))({ client: this.redis, logErrors: true }),
            saveUninitialized: false,
            secret: 'sup3rs3cr3t',
            resave: false,
            cookie: {
              sameSite: true,
              httpOnly: false,
              maxAge: 60000,
            }
          }),
          passport.initialize(),
          passport.session(),
        )
        .forRoutes('*');
    }
}
