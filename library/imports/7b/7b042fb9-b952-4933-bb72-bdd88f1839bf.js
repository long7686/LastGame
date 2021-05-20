"use strict";
cc._RF.push(module, '7b042+5uVJJM7tyvdiPGDm/', 'enemyNoShoot');
// Scripts/enemyNoShoot.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        _health: 100,
        _speed: 1
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    moving: function moving() {
        //moving theo timeline
    },
    onDamage: function onDamage() {
        // animation bị damage
    },
    onDestroy: function onDestroy() {}

    // update (dt) {},

});

cc._RF.pop();