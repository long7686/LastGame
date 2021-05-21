(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/enemyNoShoot.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7b042+5uVJJM7tyvdiPGDm/', 'enemyNoShoot', __filename);
// Scripts/enemyNoShoot.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        _health: 100,
        _speed: 1
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
        //# sourceMappingURL=enemyNoShoot.js.map
        