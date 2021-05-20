"use strict";
cc._RF.push(module, 'a1065tA/MdL2JhrnMS9zJ6s', 'moveBG');
// Scripts/moveBG.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        cc.log(this.node.y, -this.node.height);
    },
    update: function update(dt) {
        if (this.node.y > -this.node.height) {
            this.node.y -= 5;
        } else {
            this.node.y = this.node.height;
        }
    }
});

cc._RF.pop();