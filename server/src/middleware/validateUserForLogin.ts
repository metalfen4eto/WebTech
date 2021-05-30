import { request, Request, Response } from 'express';
import LoginController from '../controllers/user-controller';
import { LoginInfo } from '../interfaces/loginInfo';

const controller: LoginController = new LoginController();

const validateUserForLogin = (request: Request, response: Response, next: () => void): void => {
    const user: LoginInfo = request.body;

    const isValidUserForLogin: string[] = controller.validateUser(user);

    if(isValidUserForLogin) {
        response.status(200).json({error: isValidUserForLogin});
    }
    else {
        next();
    }
}

export default validateUserForLogin;