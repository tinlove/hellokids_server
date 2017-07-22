import {injectable, inject} from "inversify";
import {Controller, Get, Post, Put, Delete} from 'inversify-express-utils';
import {NextFunction, Request, Response, Router} from "express";

@injectable()
@Controller('/hellokids')
export class SearchController {
    constructor() {
    }

    @Get('/search')
    public helloWorld(req: Request, res: Response, next: NextFunction) {
        console.log("Search Called~~~~~~~");

        var data: { [ s: string ]: any } = {};
        data["name"] = "김나르샤";
        data["age"] = "28";
        data["location"] = "서울 송파구";
        data["title"] = "아이의 학습 및 행동발달 교정 전문! 똑똑하고 건강한 습관을 키우자.";
        data["introduction"] = "초등학교 교사로 30년간 근무했습니다. 현재는 퇴직 하였습니다. ^^ \n아이들의 교육에 관심이 많습니다. 바르게 자랄 수 있도록 제 아이처럼 함께 돌보겠습니다. 육아와 학습에 관해서 조언도 가능합니다. \n\n아이와 관련된 가사 가능합니다.";
        data["commentCount"] = "50";
        data["availableService"] = "* 아이와 관련된 가사 (빨래, 옷정리, 청소)\n* 아이 식사 도움\n* 통학 도움\n* 학습 도움";
        data["extraCharge"] = "* 아이 목욕 +3000원/1회\n* 피아노 레슨 +6000원/1회";
        data["acceptanceCondition"] = "* 최소 2시간 요청\n* 만1세 이상\n* 2명 이하";
        data["discountCondition"] = "* 1일 4시간 이상 10% 할인\n* 1일 4시간 이상 이며 주3회 이상 15% 할인\n* 정기 예약 5% 중복 할인";

        // 응답
        res.json(data);
        res.end();
    }
}
