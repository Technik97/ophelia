import { Migration } from '@mikro-orm/migrations';

export class Migration20221121160126 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "userprofiles" ("id" serial primary key, "name" varchar(255) not null, "bio" varchar(255) not null, "image" varchar(255) not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "userprofiles" cascade;');
  }

}
