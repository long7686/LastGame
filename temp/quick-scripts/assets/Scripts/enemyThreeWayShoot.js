(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/enemyThreeWayShoot.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '39d29X9knpNVIp1VBC18GIX', 'enemyThreeWayShoot', __filename);
// Scripts/enemyThreeWayShoot.js

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

        var redBullet1 = cc.instantiate(this.prefabBullet);
        redBullet1.parent = cc.Canvas.instance.node;
        redBullet1.setPosition(bulletPos.x, bulletPos.y);
        redBullet1.getComponent('enemyBullet').bulletNumber = 1;
        redBullet1.getComponent('enemyBullet').threeWay = true;
        // redBullet1.getComponent('enemyBullet').bulletToX = redBullet1.x;
        // redBullet1.getComponent('enemyBullet').bulletToY = -this.node.parent.height;


        var redBullet2 = cc.instantiate(this.prefabBullet);
        redBullet2.parent = cc.Canvas.instance.node;
        redBullet2.setPosition(bulletPos.x, bulletPos.y);
        redBullet2.getComponent('enemyBullet').bulletNumber = 2;
        redBullet2.getComponent('enemyBullet').threeWay = true;
        // redBullet2.getComponent('enemyBullet').bulletToX = redBullet2.x;
        // redBullet2.getComponent('enemyBullet').bulletToY = -this.node.parent.height;

        var redBullet3 = cc.instantiate(this.prefabBullet);
        redBullet3.parent = cc.Canvas.instance.node;
        redBullet3.setPosition(bulletPos.x, bulletPos.y);
        redBullet3.getComponent('enemyBullet').bulletNumber = 3;
        redBullet3.getComponent('enemyBullet').threeWay = true;
        // redBullet3.angle = -35
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
        //# sourceMappingURL=enemyThreeWayShoot.js.map
        