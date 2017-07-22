import {HomeModel} from './HomeModel';
import {injectable, inject} from "inversify";
import {Controller, Get, Post, Put, Delete} from 'inversify-express-utils';
import {NextFunction, Request, Response, Router} from "express";

@injectable()
@Controller('/hellokids')
export class HomeController {
    constructor( @inject(HomeModel.name) private model: HomeModel) {
    }

    @Get('/home')
    public helloWorld(req: Request, res: Response, next: NextFunction) {
        res.send(this.model.value + ' 회원님! 방갑습니다!')
    }
}
