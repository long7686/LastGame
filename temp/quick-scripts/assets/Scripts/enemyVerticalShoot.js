(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/enemyVerticalShoot.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '24862NC7ShJbJubfRFpfKDn', 'enemyVerticalShoot', __filename);
// Scripts/enemyVerticalShoot.js

"use strict";

var Emitter = require("EventsListener");
cc.Class({
    extends: cc.Component,

    properties: {
        moveToX: 0,
        moveToY: 0,
        prefabBullet: cc.Prefab,
        _timerShoot: 0,
        maxHealth: 50,
        healthBar: cc.ProgressBar
    },

    start: function start() {
        this.moving();
    },
    moving: function moving() {
        var _this = this;

        var randomAction = Math.random();
        cc.tween(this.node).to(1.5, { x: this.moveToX, y: this.moveToY }).call(function () {
            if (randomAction > 0.5) {
                _this.standingAction1();
            } else {
                _this.standingAction2();
            }
        }).start();
    },
    shoot: function shoot() {
        var bulletPos = this.node.convertToWorldSpaceAR(this.node.position);
        bulletPos = this.node.convertToNodeSpaceAR(bulletPos);

        var enemyBullet = cc.instantiate(this.prefabBullet);
        enemyBullet.setPosition(bulletPos.x, bulletPos.y);
        enemyBullet.parent = this.node.parent;

        // enemyBullet.getComponent('bulletVertical').bulletToX = bulletPos.x;
        // enemyBullet.getComponent('bulletVertical').bulletToY = -this.node.parent.height;
    },
    standingAction1: function standingAction1() {
        cc.tween(this.node).repeatForever(cc.tween(this.node).by(1, { x: 10 }).by(2, { x: -20 }).by(1, { x: 10 })).start();
    },
    standingAction2: function standingAction2() {
        cc.tween(this.node).repeatForever(cc.tween(this.node).by(1, { x: -10 }).by(2, { x: 20 }).by(1, { x: -10 })).start();
    },
    update: function update(dt) {
        this._timerShoot += dt;
        if (this._timerShoot >= 1) {
            this.shoot();
            this._timerShoot = 0;
        }

        if (this.maxHealth <= 0) {
            this.dead();
        }
    },
    getDamage: function getDamage() {
        this.healthBar.getComponent(cc.ProgressBar).progress = this.maxHealth / 50;
    },
    dead: function dead() {
        Emitter.instance.emit("countEnemies");
        this.node.destroy();
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
        //# sourceMappingURL=enemyVerticalShoot.js.map
        