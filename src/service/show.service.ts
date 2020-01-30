import { ShowRepository } from './../repository/show.repository';
import { getCustomRepository } from 'typeorm';
import { Show } from '../entity/show.entity';

export class ShowService {
    repo = getCustomRepository(ShowRepository)

    get() {
        return this.repo.find()
    }

    post(show: Show) {
        return this.repo.save(show)
    }
}