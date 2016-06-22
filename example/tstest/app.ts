/**
 * Created by laj on 2016/6/22.
 */

let isDone: boolean = false;

const enum EmSex{
    Unknown = 0,
    Male = Unknown + 2,
    Female
}

abstract class CPerson{
    static version: number = 1;
    private name:string;
    sex: EmSex;
    constructor(name:string, sex:EmSex=EmSex.Male){
        this.name = name;
        this.sex = sex;
    }

    introduce(){
        return "hello, i'm " + this.name + " 我是" + this._sexString() + "的";
    }

    private _sexString():string{
        var sex:string = '';
        switch (this.sex){
            case EmSex.Male:
                sex  = "男";
                break;
            case EmSex.Female:
                sex = '女';
                break;
        }

        return sex;
    }

    abstract say(): string;
}

class Teacher extends CPerson{
    course: string;
    constructor(name:string, course:string){
        super(name);
        this.course = course;
    }

    tech(){
        return "现在上" + this.course + "课";
    }

    say(){
        return "物理";
    }
}

window.onload = function () {
    // let xiaoMing = new CPerson("xiao ming");
    // CPerson.version = 2;
    // document.getElementById("testDiv").innerText = xiaoMing.introduce();

    let zhang : Teacher = new Teacher("张老师", "物理");
    document.getElementById("testDiv").innerText = zhang.introduce();
    document.getElementById("testDiv").innerText += "\n" + zhang.tech();

};
