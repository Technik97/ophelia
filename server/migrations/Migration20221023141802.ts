import { Migration } from '@mikro-orm/migrations';

export class Migration20221023141802 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "projects" ("id" serial primary key, "name" varchar(255) not null, "description" varchar(255) null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "projects" cascade;');
  }

}
