import { UserRepository } from '../repository/user.repository';
import { TokenService } from './token.service';
import { UserService } from './user.service';
import { getCustomRepository } from 'typeorm';
import { verify, hash } from 'argon2';
import { User } from '../entity/user.entity';
import { randomBytes } from 'crypto';
import { createTestAccount, createTransport, getTestMessageUrl } from 'nodemailer'
import { Token } from '../entity/token.entity';
import { sign } from 'jsonwebtoken';

export class AuthService {

    private repo: UserRepository;
    private tokenService: TokenService;
    private userService: UserService;

    constructor() {
        this.repo = getCustomRepository(UserRepository);
        this.tokenService = new TokenService();
        this.userService = new UserService();
    }

    private async getUserSensitives(email: string) {
        if (await this.repo.findOne({ where: { email }, select: ['email', 'password'] })) {
            return true;
        }
    }

    async signUp(user: User) {
        if (await this.getUserSensitives(user.email)) {
            throw new Error('ALREADY_EXIST');
        }
        user.password = await hash(user.password);

        const tokenString = randomBytes(12).toString('hex');

        user = this.repo.create(user); // Initialize the user's object
        user = await this.repo.save(user); // Save the user
        await this.nodemailer(tokenString, user); // Send email

        const token = new Token();
        token.user = user;
        token.value = tokenString;
        this.tokenService.create(token);

        return true;
    }
    /*
        async signIn(email: string, password: string) {
            const labelError = new Error('Invalid credentials');
            const user = await this.repo.findOne({ where: { email }, select: ['id', 'email', 'password', 'actived', 'name'] })
            // If there was no Account activation, return an error
            // If there was an Account activation, continue the method
            console.log(user);
            /*       if(!user?.actived){
                      throw new Error('NOT ACTIVE');
                  }

            if (!user) {
                throw labelError;
            }

            const isValid = await verify(user.password, password);
            if (!isValid) {
                throw labelError;
            }

            const secret1 = 'A REMPLIR';
            if (!secret1) { throw new Error('Pas de secret SETUP') };
            delete user.password;
            const token = sign(
                { id: user.id, name: user.name, email: user.email }, secret1
            )
            return { token, user };
        }

        async isConfirmed(token: string) {
            const userToken = await this.tokenService.getByValue(token);
            if (!userToken) {
                throw new Error('Lien invalide');
            }
            await this.userService.activeUserAccount(userToken.user)
        } */

    async confirmation(tokenStr: string) {
        const token = await this.tokenService.getByValue(tokenStr);
        if (!token) {
            throw new Error('Lien invalide');
        }
        await this.userService.activeUserAccount(token.user)
    }
    private async nodemailer(token: string, user: User) {
        const testAccount = await createTestAccount()

        const transporter = createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // Generated etheral user
                pass: testAccount.pass, // Generated etheral password
            }
        });

        const info = await transporter.sendMail({
            from: '<antoebt@hotmail.com>',
            to: user.email,
            subject: 'Activation link',
            text: 'Hello World',
            html: `<b> Hello ${user.name} <br> Here is your activation link <a href="http:localhost:3000/auth/confirmation/${token}"> Activation Link </a> </b>`
        });

        console.log('Message sent to: %s', user.email);
        console.log('Preview URL: %s', getTestMessageUrl(info))
    }
}