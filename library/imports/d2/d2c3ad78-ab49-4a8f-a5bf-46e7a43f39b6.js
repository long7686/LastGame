"use strict";
cc._RF.push(module, 'd2c3a14q0lKj6W/RuekPzm2', 'LaserGreen');
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