import { Show } from './../entity/show.entity';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(Show)
export class ShowRepository extends Repository<Show>{

}