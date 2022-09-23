import { Entity, Column, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity()
export class User {
    @PrimaryColumn('uuid')
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    telephone: string;

    @Column()
    readonly registerDate: Date;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }

        if(!this.registerDate){
            this.registerDate = new Date()
        }
    }
}