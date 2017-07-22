import {injectable} from "inversify";

@injectable()
export class TestModel {

    public value :string;

    constructor(){
        this.value = "TestValue";
    }
}
