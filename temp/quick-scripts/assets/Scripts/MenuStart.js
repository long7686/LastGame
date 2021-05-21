(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/MenuStart.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '699d8xhnG1GJInwL3xU37uj', 'MenuStart', __filename);
// Scripts/MenuStart.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        startBtn: cc.Button,
        introduction: cc.Node,
        mainGame: cc.Node

    },

    start: function start() {},
    onIntroClick: function onIntroClick() {
        this.node.active = false;
        this.introduction.active = true;
    },
    onStartClick: function onStartClick() {
        this.node.active = false;
        this.mainGame.active = true;
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
        //# sourceMappingURL=MenuStart.js.map
        