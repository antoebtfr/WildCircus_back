import { ShowRepository } from './../repository/show.repository';
import { getCustomRepository, getConnection, ObjectLiteral } from 'typeorm';
import { Show } from '../entity/show.entity';

export class ShowService {
    repo = getCustomRepository(ShowRepository)

    get() {
        return this.repo.find()
    }

    post(show: Show) {
        return this.repo.save(show)
    }

    modifyById(id: number, body: any) {
        return this.repo.update({id}, body)
    }

    deleteById(id:number){
        return this.repo.delete(id)
    }
}