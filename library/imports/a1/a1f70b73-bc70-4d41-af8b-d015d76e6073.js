"use strict";
cc._RF.push(module, 'a1f70tzvHBNQa+L0BXXbmBz', 'enemyBullet');
// Scripts/enemyBullet.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        bulletToX: 0,
        bulletToY: 0,
        speed: 1,
        _widthCanvas: 0,
        threeWay: false,
        bulletNumber: 0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        var _this = this;

        this._heightCanvas = cc.Canvas.instance.node.getContentSize().height;
        if (this.threeWay === false) {
            cc.tween(this.node).by(this.speed, { x: this.bulletToX - this.node.x, y: this.bulletToY - this.node.y }).repeatForever().start();
        } else {
            if (this.bulletNumber === 1) {

                cc.tween(this.node).by(4, { x: -500, y: -500 }).call(function () {
                    return _this.node.destroy();
                }).start();
            }if (this.bulletNumber === 2) {

                cc.tween(this.node).by(4, { x: 500, y: -500 }).call(function () {
                    return _this.node.destroy();
                }).start();
            }if (this.bulletNumber === 3) {

                cc.tween(this.node).by(4, { x: 0, y: -500 }).call(function () {
                    return _this.node.destroy();
                }).start();
            }
        }
    },
    update: function update(dt) {
        if (this.node.y < -(this._heightCanvas / 2 + this.node.height)) {
            this.node.destroy();
        }
    }
});

cc._RF.pop();