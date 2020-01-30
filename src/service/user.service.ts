import { UserRepository } from './../repository/user.repository';
import { User } from '../entity/user.entity';
import { getCustomRepository } from "typeorm";

export class UserService{
    repo = getCustomRepository(UserRepository);

    get() {
        return this.repo.find();
    }

    post(user: User) {
        return this.repo.save(user)
    }
}