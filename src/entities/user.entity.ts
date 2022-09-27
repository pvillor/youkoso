import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Contact } from './contact.entity';

@Entity()
export class User {
    @PrimaryColumn('uuid')
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    telephone: string;

    @Column()
    readonly registerDate: Date;

    @OneToMany(type => Contact, contact => contact.user, {
        eager: true
    })
    contacts: Contact[]

    constructor(){
        if(!this.id){
            this.id = uuid()
        }

        if(!this.registerDate){
            this.registerDate = new Date()
        }
    }
}