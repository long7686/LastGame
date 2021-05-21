(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/bulletPlayer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '42dd9VYUWhDmJiN2n/mu2lc', 'bulletPlayer', __filename);
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
        //# sourceMappingURL=bulletPlayer.js.map
        