import { Migration } from '@mikro-orm/migrations';

export class Migration20221112130852 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "users" ("id" serial primary key, "email" varchar(255) not null, "name" varchar(255) not null, "password" varchar(255) not null);');
    this.addSql('alter table "users" add constraint "users_email_unique" unique ("email");');

    this.addSql('alter table "projects" add constraint "projects_name_unique" unique ("name");');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "users" cascade;');

    this.addSql('alter table "projects" drop constraint "projects_name_unique";');
  }

}
