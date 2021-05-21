(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/moveBG.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a1065tA/MdL2JhrnMS9zJ6s', 'moveBG', __filename);
// Scripts/moveBG.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    start: function start() {},
    update: function update(dt) {
        if (this.node.y > -this.node.height) {
            this.node.y -= 5;
        } else {
            this.node.y = this.node.height;
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
        //# sourceMappingURL=moveBG.js.map
        