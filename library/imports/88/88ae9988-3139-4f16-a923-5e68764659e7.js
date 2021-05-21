"use strict";
cc._RF.push(module, '88ae9mIMTlPFqkjXmh2Rlnn', 'bulletThreeWay');
// Scripts/bulletThreeWay.js

"use strict";

cc.Class({
    extends: require("bulletVertical"),

    properties: {
        bulletNumber: 0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        var _this = this;

        this._heightCanvas = cc.Canvas.instance.node.getContentSize().height;
        if (this.bulletNumber === 1) {

            cc.tween(this.node).by(4, { x: -700, y: -700 }).call(function () {
                return _this.node.destroy();
            }).start();
        }if (this.bulletNumber === 2) {

            cc.tween(this.node).by(4, { x: 700, y: -700 }).call(function () {
                return _this.node.destroy();
            }).start();
        }if (this.bulletNumber === 3) {

            cc.tween(this.node).by(4, { x: 0, y: -700 }).call(function () {
                return _this.node.destroy();
            }).start();
        }
    },
    update: function update(dt) {
        if (this.node.y < -(this._heightCanvas / 2 + this.node.height)) {
            this.node.destroy();
        }
    }
});

cc._RF.pop();