(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/myFunction.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1ed913STrtITaygaH73MAg0', 'myFunction', __filename);
// Scripts/myFunction.js

"use strict";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

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
        //# sourceMappingURL=myFunction.js.map
        