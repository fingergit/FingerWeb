/**
 * Created by myf on 16/5/31.
 */

function Action(name){
    this.name = name;
}

{
    Action.prototype.do = function(){
    };

    Action.prototype.undo = function(){
    };
}

function ActionManager() {
    this.redoList = [];
    this.undoList = [];
}

{
    ActionManager.prototype.addAction = function (action) {
        this.undoList.push(action);
        this.redoList.length = 0;
        action.do();
    };

    ActionManager.prototype.undo = function () {
        if (this.undoList.length == 0){
            return;
        }

        var action = this.undoList.pop();
        this.redoList.push(action);
        action.undo();
    };

    ActionManager.prototype.redo = function () {
        if (this.redoList.length == 0){
            return;
        }

        var action = this.redoList.pop();
        this.undoList.push(action);
        action.do();
    };

    ActionManager.prototype.canUndo = function () {
        return this.undoList.length > 0;
    };

    ActionManager.prototype.canRedo = function () {
        return this.redoList.length > 0;
    };
}

var g_result = 0;
function MathAction(name, add){
    this.name = name;
    this.add = parseInt(add);
}

MathAction.prototype.do = function(){
    g_result += this.add;
};

MathAction.prototype.undo = function(){
    g_result -= this.add;
};


