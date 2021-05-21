(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/player.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '41b5c+Le0xHrYD1wVc26X8q', 'player', __filename);
// Scripts/player.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        _movingDown: false,
        _movingRight: false,
        _movingUp: false,
        _movingLeft: false,
        playerHealth: 100
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },
    start: function start() {},
    moveLeft: function moveLeft() {
        this._movingLeft = true;
    },
    moveRight: function moveRight() {
        this._movingRight = true;
    },
    moveUp: function moveUp() {
        this._movingUp = true;
    },
    moveDown: function moveDown() {
        this._movingDown = true;
    },


    onKeyDown: function onKeyDown(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.w:
                {
                    this.moveUp();
                    break;
                }
            case cc.macro.KEY.a:
                {
                    this.moveLeft();
                    break;
                }
            case cc.macro.KEY.s:
                {
                    this.moveDown();
                    break;
                }
            case cc.macro.KEY.d:
                {
                    this.moveRight();
                    break;
                }
            default:
                {}
        }
    },

    update: function update(dt) {

        if (this._movingLeft === true) {
            cc.tween(this.node).by(0.25, { x: -50 }).start();
            this._movingLeft = false;
        }

        if (this._movingRight === true) {
            cc.tween(this.node).by(0.25, { x: 50 }).start();
            this._movingRight = false;
        }

        if (this._movingUp === true) {
            cc.tween(this.node).by(0.25, { y: 50 }).start();
            this._movingUp = false;
        }

        if (this._movingDown === true) {
            cc.tween(this.node).by(0.25, { y: -50 }).start();
            this._movingDown = false;
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
        //# sourceMappingURL=player.js.map
        