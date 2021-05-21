(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/Introduction .js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '68349udf5ZNCqVn7wpLv3Wl', 'Introduction ', __filename);
// Scripts/Introduction .js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        menuStart: cc.Node

    },

    onBackClick: function onBackClick() {
        this.menuStart.active = true;
        this.node.active = false;
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
        //# sourceMappingURL=Introduction .js.map
        