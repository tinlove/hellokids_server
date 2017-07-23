import {injectable, inject} from "inversify";
import {Controller, Get, Post, Put, Delete} from 'inversify-express-utils';
import {NextFunction, Request, Response, Router} from "express";
import {TestService} from './TestService';
import {TestModel} from './TestModel';

@injectable()
@Controller('/api')
export class TestController {
    constructor(
        @inject(TestService.name) private testService: TestService,
        @inject(TestModel.name) private testModel: TestModel
    ) {
        // console.log("TestController has begun.");
    }

    // ========================
    // Test 메소드들 사용예시 (임시)
    // ========================
    @Get('/test')
    public testGet(req: Request, res: Response, next: NextFunction) {
        var queryParam = req.query;

        console.log("Get");
        console.log("queryParam:", queryParam);

        res.send("GetTest12345");
    }

    @Post('/test')
    public testPost(req: Request, res: Response, next: NextFunction) {
        var queryParam = req.query;
        let contentBody = req.body;

        console.log("Post");
        console.log("queryParam:", queryParam);
        console.log("contentBody", contentBody);

        res.send("Post");
    }

    @Put('/test/:id')
    public testPut(req: Request, res: Response, next: NextFunction) {
        let id = req.params["id"];
        var queryParam = req.query;
        let contentBody = req.body;

        console.log("Put");
        console.log("id:", id);
        console.log("queryParam:", queryParam);
        console.log("contentBody", contentBody);

        res.send("Put");
    }

    @Delete('/test/:id')
    public testDelete(req: Request, res: Response, next: NextFunction) {
        let id = req.params["id"];

        console.log("Delete");
        console.log("id:", id);

        res.send("Delete");
    }
}
