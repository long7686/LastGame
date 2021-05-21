"use strict";
cc._RF.push(module, '42dd9VYUWhDmJiN2n/mu2lc', 'bulletPlayer');
// Scripts/bulletPlayer.js

"use strict";

cc.Class({
    extends: require("bulletVertical"),

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this._heightCanvas = cc.Canvas.instance.node.getContentSize().height;
        cc.tween(this.node).by(this.speed, { x: this.bulletToX - this.node.x, y: this.bulletToY - this.node.y }).repeatForever().start();
    },
    update: function update(dt) {
        if (this.node.y < -(this._heightCanvas / 2 + this.node.height)) {
            this.node.destroy();
        }
    }
});

cc._RF.pop();