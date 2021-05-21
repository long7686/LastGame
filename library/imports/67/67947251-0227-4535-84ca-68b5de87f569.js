"use strict";
cc._RF.push(module, '67947JRAidFNYTKaLXeh/Vp', 'bulletVertical');
// Scripts/bulletVertical.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 1,
        _heightCanvas: 0

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this._heightCanvas = cc.Canvas.instance.node.getContentSize().height;
        cc.tween(this.node).by(this.speed, { x: 0, y: -500 }).repeatForever().start();
    },
    update: function update(dt) {
        if (this.node.y < -(this._heightCanvas / 2 + this.node.height)) {
            this.node.destroy();
        }
    }
});

cc._RF.pop();