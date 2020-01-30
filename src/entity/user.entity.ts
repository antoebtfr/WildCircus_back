import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')

export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 50})
    name!: string;

    @Column ({ type: 'varchar', length: 45})
    email!: string;

    @Column ({type:'varchar', length: 45})
    pass!: string;

    @Column ({type: 'boolean', default: false})
    isPremium!: boolean;

    @Column ({type: 'varchar', length: 250, })
    img!: string; 
    
}