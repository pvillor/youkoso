import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1664148430596 implements MigrationInterface {
    name = 'createTables1664148430596'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }

}
