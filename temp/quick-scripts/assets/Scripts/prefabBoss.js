(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/prefabBoss.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ce9b5ZCk7tHXbPCT6UsD8JO', 'prefabBoss', __filename);
// Scripts/prefabBoss.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        movingRight: true,
        settingWidth: 0,
        settingHeight: 0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    movingBoss: function movingBoss() {
        var widthCanvas = cc.Canvas.instance.node.getContentSize().width;
        var widthBoss = this.node.width;

        if (this.movingRight === true) {
            var moving = cc.tween().to(3, { x: widthCanvas / 2 - widthBoss / 2 }).to(0.01, { scaleX: -1 }).to(6, { x: -(widthCanvas / 2 - widthBoss / 2) }).to(0.01, { scaleX: 1 }).to(3, { x: 0 });
            cc.tween(this.node).then(moving).repeatForever().start();
        } else {
            this.node.scaleX = -1;
            var _moving = cc.tween().to(3, { x: -(widthCanvas / 2 - widthBoss / 2) }).to(0.01, { scaleX: 1 }).to(6, { x: widthCanvas / 2 - widthBoss / 2 }).to(0.01, { scaleX: -1 }).to(3, { x: 0 });
            cc.tween(this.node).then(_moving).repeatForever().start();
        }
    },
    start: function start() {
        this.node.width = this.settingWidth;
        this.node.height = this.settingHeight;
        this.movingBoss();
    }
}

// update (dt) {},
);

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
        //# sourceMappingURL=prefabBoss.js.map
        