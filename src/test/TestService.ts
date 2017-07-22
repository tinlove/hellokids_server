import {injectable} from "inversify";

@injectable()
export class TestService {

    constructor(){}

    public test() {
        console.log("[TestService] test()");
    }
}
