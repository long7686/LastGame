"use strict";
cc._RF.push(module, 'c0d9ev+ZO9HEY96OYONk8JR', 'enemyPlayerShoot');
// Scripts/enemyPlayerShoot.js

'use strict';

var Emitter = require("EventsListener");
cc.Class({
    extends: cc.Component,

    properties: {
        prefabBullet: cc.Prefab,
        _timerShoot: 0,
        maxHealth: 100,
        healthBar: cc.ProgressBar
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.moving();
        //Emitter.instance.registerEvent("playerDead", this.dead.bind(this))
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
    standingAction1: function standingAction1() {
        cc.tween(this.node).repeatForever(cc.tween(this.node).by(1, { x: 10 }).by(2, { x: -20 }).by(1, { x: 10 })).start();
    },
    standingAction2: function standingAction2() {
        cc.tween(this.node).repeatForever(cc.tween(this.node).by(1, { x: -10 }).by(2, { x: 20 }).by(1, { x: -10 })).start();
    },
    shoot: function shoot(bulletToX, bulletToY) {
        var bulletPos = this.node.convertToWorldSpaceAR(this.node.position);
        bulletPos = this.node.convertToNodeSpaceAR(bulletPos);

        var enemyBullet = cc.instantiate(this.prefabBullet);
        enemyBullet.setPosition(bulletPos.x, bulletPos.y);
        enemyBullet.parent = this.node.parent;

        enemyBullet.getComponent('bulletPlayer').bulletToX = bulletToX;
        enemyBullet.getComponent('bulletPlayer').bulletToY = bulletToY;
    },
    update: function update(dt) {
        this._timerShoot += dt;
        if (this._timerShoot >= 1) {
            var playerPosition = this.node.parent.getChildByName('Main Game').getChildByName('Player');
            if (playerPosition != null) {
                var positionXPlayer = playerPosition.x;
                var positionYPlayer = playerPosition.y;
                this.shoot(positionXPlayer, positionYPlayer);
            }
            this._timerShoot = 0;
        }
        if (this.maxHealth <= 0) {
            this.dead();
        }
    },
    getDamage: function getDamage() {
        this.healthBar.getComponent(cc.ProgressBar).progress = this.maxHealth / 100;
    },
    dead: function dead() {
        Emitter.instance.emit("countEnemies");
        this.node.destroy();
    }
});

cc._RF.pop();