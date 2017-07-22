import {injectable, inject} from "inversify";
import {Controller, Get, Post, Put, Delete} from 'inversify-express-utils';
import {NextFunction, Request, Response, Router} from "express";

@injectable()
@Controller('/hellokids')
export class LoginController {
    constructor() {
    }

    @Get('/login')
    public helloWorld(req: Request, res: Response, next: NextFunction) {
        console.log("Login:Get");
        res.send("Login:Get");
    }
}
