(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/enemyBullet.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a1f70tzvHBNQa+L0BXXbmBz', 'enemyBullet', __filename);
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
            cc.tween(this.node).by(this.speed, { x: 0, y: -300 }).repeatForever().start();
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
        //# sourceMappingURL=enemyBullet.js.map
        