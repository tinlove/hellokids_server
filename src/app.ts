/**
 * @author KayPark (onlysewon@naver.com)
 */


import 'reflect-metadata';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import {Container} from 'inversify';
import {Controller, InversifyExpressServer, TYPE} from 'inversify-express-utils';
import {CommonService} from './common/CommonService';
import {HomeModel} from './home/HomeModel';
import {HomeController} from './home/HomeController';
import {LoginController} from './login/LoginController';
import {SearchController} from './search/SearchController';
import {TestController} from './test/TestController';
import {TestModel} from './test/TestModel';
import {TestService} from './test/TestService';


/**
 * @brief HelloKids Application Server
 */
export class Server {
    private PORT: number = 3003;
    private app: express.Application;
    private server: InversifyExpressServer;
    private container: Container;

    constructor(private dependencyArr: [any]) {
        this.container = new Container();
        this.configureDependency();
        this.server = new InversifyExpressServer(this.container);

        this.server.setConfig((app) => {
            app.use(bodyParser.urlencoded({
                extended: true
            }));
            app.use(bodyParser.json());
        });

        this.app = this.server.build();
        this.app.listen(this.PORT, () => {
            this.printStartingLogs();
        });
    }

    /**
     * @brief Starting Message
     */
    private printStartingLogs() {
        console.log("==========================================");
        console.log("Hello Kids Application Server has started.");
        console.log("==========================================");
    }

    /**
     * @brief Dependency Configuration
     */
    private configureDependency() {
        for (let index in this.dependencyArr) {
            let dependencyObj : any = this.dependencyArr[index];
            let className : string = dependencyObj.name;
            let isController : boolean = className.substring(className.length - 10, className.length) === 'Controller';

            if (isController) {
                this.container.bind(TYPE.Controller).to(dependencyObj).whenTargetNamed(className);
            } else {
                this.container.bind(className).to(dependencyObj);
            }
        }
    }

    /**
     * @brief 서버시작
     */
    public static bootstrap(dependencyArr: [any]): Server {
        return new Server(dependencyArr);
    }
}


/**
 * ==============================================
 * @brief IoC 컨테이너에 등록할 Bean Dependencies 정의
 * ==============================================
 */
let dependencyContext: [any] = [

    /* 테스트 */
    TestController,
    TestService,
    TestModel,

    /* 서버공통 */
    CommonService,

    /* 홈 */
    HomeController,
    HomeModel,

    /* 로그인 */
    LoginController,

    /* 검색 */
    SearchController

];

// Server Start
Server.bootstrap(dependencyContext);