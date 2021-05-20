"use strict";
cc._RF.push(module, '24862NC7ShJbJubfRFpfKDn', 'enemyVerticalShoot');
// Scripts/enemyVerticalShoot.js

'use strict';

cc.Class({
    extends: require("enemyNoShoot"),

    properties: {
        moveToX: 0, // vị trí x bay đến
        moveToY: 0, // vị trí y bay đến
        prefabBullet: cc.Prefab,
        _timerShoot: 0
    },

    start: function start() {
        //this.shoot();
    },
    moving: function moving() {
        cc.tween(this.node).to(1, { x: this.moveToX, y: this.moveToY }).start();
    },
    shoot: function shoot() {
        var bulletPos = this.node.convertToWorldSpaceAR(this.node.position);
        bulletPos = this.node.convertToNodeSpaceAR(bulletPos);

        var enemyBullet = cc.instantiate(this.prefabBullet);
        enemyBullet.setPosition(bulletPos.x, bulletPos.y);
        enemyBullet.parent = this.node.parent;

        enemyBullet.getComponent('enemyBullet').bulletToX = bulletPos.x;
        enemyBullet.getComponent('enemyBullet').bulletToY = -this.node.parent.height;
    },
    update: function update(dt) {
        this._timerShoot += dt;
        if (this._timerShoot >= 1) {
            this.shoot();
            this._timerShoot = 0;
        }
    }
});

cc._RF.pop();