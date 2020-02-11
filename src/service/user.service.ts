import { UserRepository } from './../repository/user.repository';
import { User } from '../entity/user.entity';
import { getCustomRepository } from 'typeorm';
import { TokenRepository } from '../repository/token.repository';

export class UserService {
    protected repo = getCustomRepository(UserRepository);
    protected tokenRepo = getCustomRepository(TokenRepository);

    async activeUserAccount(user: User) {
        user.actived = true;
        this.repo.update(user.id, user)
    }

    get() {
        return this.repo.find()
    }

    post(user: User) {
        return this.repo.save(user)
    }

    modifyById(id: number, body: any) {
        return this.repo.update({ id }, body)
    }

    deleteById(id: number) {
        return this.repo.delete({ 'id': id })
    }
}