import {injectable} from "inversify";

@injectable()
export class CommonService {

    constructor(){
        console.log("CommonService has begun.");
    }

    public test() {
        console.log("[CommonService] test()");
    }
}
