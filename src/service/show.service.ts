import { ShowRepository } from './../repository/show.repository';
import { getCustomRepository } from 'typeorm';
import { Show } from '../entity/show.entity';

export class ShowService {
    repo = getCustomRepository(ShowRepository)

    getAll() {
        return this.repo.find()
    }

    getOnlyFree(){
        return this.repo.find({ where : { onlyPremium : false }})
    }

    getOnlyPremium(){
        return this.repo.find({ where : { onlyPremium : true }})
    }

    post(show: Show) {
        return this.repo.save(show)
    }

    modifyById(id: number, body: any) {
        return this.repo.update({ id }, body)
    }

    deleteById(id: number) {
        return this.repo.delete(id)
    }
}