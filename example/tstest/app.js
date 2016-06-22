/**
 * Created by laj on 2016/6/22.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isDone = false;
var CPerson = (function () {
    function CPerson(name, sex) {
        if (sex === void 0) { sex = 2 /* Male */; }
        this.name = name;
        this.sex = sex;
    }
    CPerson.prototype.introduce = function () {
        return "hello, i'm " + this.name + " 我是" + this._sexString() + "的";
    };
    CPerson.prototype._sexString = function () {
        var sex = '';
        switch (this.sex) {
            case 2 /* Male */:
                sex = "男";
                break;
            case 3 /* Female */:
                sex = '女';
                break;
        }
        return sex;
    };
    CPerson.version = 1;
    return CPerson;
}());
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, course) {
        _super.call(this, name);
        this.course = course;
    }
    Teacher.prototype.tech = function () {
        return "现在上" + this.course + "课";
    };
    Teacher.prototype.say = function () {
        return "物理";
    };
    return Teacher;
}(CPerson));
window.onload = function () {
    // let xiaoMing = new CPerson("xiao ming");
    // CPerson.version = 2;
    // document.getElementById("testDiv").innerText = xiaoMing.introduce();
    var zhang = new Teacher("张老师", "物理");
    document.getElementById("testDiv").innerText = zhang.introduce();
    document.getElementById("testDiv").innerText += "\n" + zhang.tech();
};
//# sourceMappingURL=app.js.map