import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1663884144876 implements MigrationInterface {
    name = 'initialMigration1663884144876'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "registerDate"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "registerDate" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "registerDate"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "registerDate" integer NOT NULL`);
    }

}
