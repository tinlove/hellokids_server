import {injectable} from "inversify";

@injectable()
export class HomeModel {

    public value :string;

    constructor(){
        this.value = "홍길동";
    }
}
