(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/updatingTime.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '69bd58Mb31DqoQIjkCuukHL', 'updatingTime', __filename);
// Scripts/updatingTime.js

"use strict";

var Emitter = require("EventsListener");
cc.Class({
    extends: cc.Component,

    properties: {
        _timerUpdateTime: 0,
        _timeStart: {
            default: 0,
            serializable: false
        },
        _timeNow: {
            default: 0,
            serializable: false
        },
        _updating: true,
        totalTime: 0
    },

    onLoad: function onLoad() {
        Emitter.instance.registerEvent("endGame", this.stopUpdateTime.bind(this));
    },
    stopUpdateTime: function stopUpdateTime() {
        this._updating = false;
    },
    start: function start() {},
    update: function update(dt) {
        this._timerUpdateTime += dt;
        if (this._timerUpdateTime > 1 && this._updating === true) {
            this._timeNow += 1;
            this.updateTime(this._timeNow);
            this._timerUpdateTime = 0;
        }
    },
    updateTime: function updateTime(timeNow) {
        var result = (timeNow - this._timeStart) * 1000;
        result = result.toLocaleString('it-IT');
        this.totalTime = result;
        // cc.log(this.totalTime);
        this.node.getComponent(cc.Label).string = this.timeConvert(result);
    },
    timeConvert: function timeConvert(num) {
        var minutes = Math.floor(num / 60);
        if (minutes < 10) minutes = "0" + minutes;
        var seconds = num % 60;
        if (seconds < 10) seconds = "0" + seconds;
        return minutes + ":" + seconds;
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=updatingTime.js.map
        