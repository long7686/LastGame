(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/wrapNode.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'de6dcmP41JHWq6+Hw9yyaJm', 'wrapNode', __filename);
// Scripts/wrapNode.js

'use strict';

var EventEmitter = require('eventEmitter');

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        EventEmitter.instance = new EventEmitter();
        EventEmitter.instance.registerEvent("changeNode", this.changeNode.bind(this));
    },
    start: function start() {},
    changeNode: function changeNode(nameNode) {
        switch (nameNode) {
            case 'home':
                {
                    // TODO
                    break;
                }
            case 'introduction':
                {
                    //TODO
                    break;
                }

        }
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
        //# sourceMappingURL=wrapNode.js.map
        