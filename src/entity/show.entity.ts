import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('show')

export class Show {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 50})
    name!: string;

    @Column()
    price!: number;

    @Column()
    nbPlace!: number;

    @Column()
    freePlace!: number;

    @Column({ type: 'boolean', default: false })
    onlyPremium!: boolean;

    @Column({type: 'varchar', length: 250})
    img!: string;

}