"use strict";
cc._RF.push(module, 'de6dcmP41JHWq6+Hw9yyaJm', 'wrapNode');
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