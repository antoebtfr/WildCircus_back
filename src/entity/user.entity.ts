import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')

export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 50})
    name!: string;

    @Column ({ type: 'varchar', length: 45})
    email!: string;

    @Column ({type: 'varchar', length: 250, default:''})
    img?: string;

    @Column ({type:'varchar', length: 250})
    password!: string;

    @Column ({type: 'boolean', default: false})
    isPremium!: boolean;

    @Column ({type: 'boolean', default: false})
    isAdmin!: boolean;

    @Column ({type: 'boolean', default: false})
    actived!: boolean;

}