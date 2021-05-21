"use strict";
cc._RF.push(module, '44f96IOMuhGMpfo5R3PduqF', 'PlayerHealthBar');
// Scripts/PlayerHealthBar.js

"use strict";

var Emitter = require("EventsListener");
cc.Class({
    extends: cc.Component,

    properties: {},

    // onLoad () {},

    start: function start() {
        Emitter.instance.registerEvent("healthbar", this.health.bind(this));
    },
    health: function health(playerHealth) {
        this.node.getComponent(cc.ProgressBar).progress = playerHealth / 100;
        if (this.node.getComponent(cc.ProgressBar).progress >= 0.7) {
            this.node.getChildByName("bar").color = cc.Color.GREEN;
        } else if (this.node.getComponent(cc.ProgressBar).progress < 0.7 && this.node.getComponent(cc.ProgressBar).progress > 0.3) {
            this.node.getChildByName("bar").color = cc.Color.YELLOW;
        } else {
            this.node.getChildByName("bar").color = cc.Color.RED;
        }
    },
    update: function update(dt) {}
});

cc._RF.pop();