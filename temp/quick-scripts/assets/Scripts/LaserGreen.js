(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/LaserGreen.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd2c3a14q0lKj6W/RuekPzm2', 'LaserGreen', __filename);
// Scripts/LaserGreen.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        _speedLaser: 1000
    },

    start: function start() {
        var _this = this;

        if (this.node.angle === 0) {
            cc.tween(this.node).by(1, { y: this._speedLaser }).call(function () {
                return _this.node.destroy();
            }).start();
        } else if (this.node.angle === 90) {
            cc.tween(this.node).by(1, { x: this._speedLaser }).call(function () {
                return _this.node.destroy();
            }).start();
        } else if (this.node.angle === 180) {
            cc.tween(this.node).by(1, { y: -this._speedLaser }).call(function () {
                return _this.node.destroy();
            }).start();
        } else if (this.node.angle === 270) {
            cc.tween(this.node).by(1, { x: -this._speedLaser }).call(function () {
                return _this.node.destroy();
            }).start();
        }
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
        //# sourceMappingURL=LaserGreen.js.map
        