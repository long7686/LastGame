(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/bulletVertical.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '67947JRAidFNYTKaLXeh/Vp', 'bulletVertical', __filename);
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
        //# sourceMappingURL=bulletVertical.js.map
        