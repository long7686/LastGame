(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/SpaceShip Controller.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '905ccz7eb9BFIRWs2ZrOEv2', 'SpaceShip Controller', __filename);
// Scripts/SpaceShip Controller.js

"use strict";

var Emitter = require("EventsListener");
cc.Class({
    extends: cc.Component,

    properties: {
        _mousePos: cc.v2,
        _currentSkin: null,
        spriteFrameGreen: {
            default: null,
            type: cc.SpriteFrame,
            _flag: false
        },

        spriteFrameBlue: {
            default: null,
            type: cc.SpriteFrame,
            _flag: false
        },

        spriteFrameRed: {
            default: null,
            type: cc.SpriteFrame,
            _flag: false
        },

        spriteFrameOrange: {
            default: null,
            type: cc.SpriteFrame,
            _flag: false
        }
    },

    onLoad: function onLoad() {
        cc.Canvas.instance.node.on("mousemove", this.getMousePosition, this);
        this.node.on("mousedown", this.shoot, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this._currentSkin = this.node.getComponent(cc.Sprite);
    },
    getMousePosition: function getMousePosition(event) {
        this._mousePos = event.getLocation();
    },
    shoot: function shoot(event) {
        if (event._button === 0) {
            Emitter.instance.emit("letShoot");
        }
    },
    onKeyDown: function onKeyDown(event) {
        this.spriteFrameGreen._flag = false;
        this.spriteFrameBlue._flag = false;
        this.spriteFrameRed._flag = false;
        this.spriteFrameOrange._flag = false;
        switch (event.keyCode) {
            case cc.macro.KEY.z:
                this.spriteFrameGreen._flag = true;
                this.changeSkin();
                break;
            case cc.macro.KEY.x:
                this.spriteFrameBlue._flag = true;
                this.changeSkin();
                break;
            case cc.macro.KEY.c:
                this.spriteFrameRed._flag = true;
                this.changeSkin();
                break;
            case cc.macro.KEY.v:
                this.spriteFrameOrange._flag = true;
                this.changeSkin();
                break;
        }
    },
    update: function update(dt) {
        var myCanvasSize = cc.Canvas.instance.node.getContentSize();
        if (this._mousePos != null) {
            this.node.position = cc.v2(this._mousePos.x - myCanvasSize.width / 2, this._mousePos.y - myCanvasSize.height / 2);
        }
    },
    changeSkin: function changeSkin() {
        if (this.spriteFrameGreen._flag) {
            this._currentSkin.spriteFrame = this.spriteFrameGreen;
            Emitter.instance.emit("skin", this.spriteFrameGreen._flag, this.spriteFrameBlue._flag, this.spriteFrameRed._flag, this.spriteFrameOrange._flag);
        } else if (this.spriteFrameBlue._flag) {
            this._currentSkin.spriteFrame = this.spriteFrameBlue;
            Emitter.instance.emit("skin", this.spriteFrameGreen._flag, this.spriteFrameBlue._flag, this.spriteFrameRed._flag, this.spriteFrameOrange._flag);
        } else if (this.spriteFrameRed._flag) {
            this._currentSkin.spriteFrame = this.spriteFrameRed;
            Emitter.instance.emit("skin", this.spriteFrameGreen._flag, this.spriteFrameBlue._flag, this.spriteFrameRed._flag, this.spriteFrameOrange._flag);
        } else if (this.spriteFrameOrange._flag) {
            this._currentSkin.spriteFrame = this.spriteFrameOrange;
            Emitter.instance.emit("skin", this.spriteFrameGreen._flag, this.spriteFrameBlue._flag, this.spriteFrameRed._flag, this.spriteFrameOrange._flag);
        }
    },
    dead: function dead() {
        // play animation player dead
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
        //# sourceMappingURL=SpaceShip Controller.js.map
        