"use strict";
cc._RF.push(module, '68349udf5ZNCqVn7wpLv3Wl', 'Introduction ');
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