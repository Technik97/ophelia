import { Logger } from "@nestjs/common";
import { Options } from '@mikro-orm/core';

const logger = new Logger('MikroORM');
const config: Options = {
    entities: ['./dist/**/*.model.js'],
    entitiesTs: ['./src/**/*.model.ts'],
    dbName: 'ophelia_dev',
    type: 'postgresql',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    logger: logger.log.bind(logger),
}
export default config;