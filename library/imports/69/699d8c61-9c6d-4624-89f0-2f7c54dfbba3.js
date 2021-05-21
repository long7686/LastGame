"use strict";
cc._RF.push(module, '699d8xhnG1GJInwL3xU37uj', 'MenuStart');
// Scripts/MenuStart.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        startBtn: cc.Button,
        introduction: cc.Button,
        mainGame: cc.Node

    },

    start: function start() {},
    onStartClick: function onStartClick() {
        this.node.active = false;
        this.mainGame.active = true;
    }
});

cc._RF.pop();