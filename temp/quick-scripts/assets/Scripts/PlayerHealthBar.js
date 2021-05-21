(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/PlayerHealthBar.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '44f96IOMuhGMpfo5R3PduqF', 'PlayerHealthBar', __filename);
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
        //# sourceMappingURL=PlayerHealthBar.js.map
        