import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { User } from './user.entity';

@Entity()
export class Contact {
    @PrimaryColumn('uuid')
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    telephone: string;

    @ManyToOne(type => User, user => user.contacts)
    user: User

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}