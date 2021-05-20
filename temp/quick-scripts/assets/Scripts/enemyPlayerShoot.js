(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/enemyPlayerShoot.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c0d9ev+ZO9HEY96OYONk8JR', 'enemyPlayerShoot', __filename);
// Scripts/enemyPlayerShoot.js

'use strict';

cc.Class({
    extends: require("enemyNoShoot"),

    properties: {
        prefabBullet: cc.Prefab,
        _timerShoot: 0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    moving: function moving() {},
    shoot: function shoot(bulletToX, bulletToY) {
        var bulletPos = this.node.convertToWorldSpaceAR(this.node.position);
        bulletPos = this.node.convertToNodeSpaceAR(bulletPos);

        var enemyBullet = cc.instantiate(this.prefabBullet);
        enemyBullet.setPosition(bulletPos.x, bulletPos.y);
        enemyBullet.parent = this.node.parent;

        enemyBullet.getComponent('enemyBullet').bulletToX = bulletToX;
        enemyBullet.getComponent('enemyBullet').bulletToY = bulletToY;
    },
    update: function update(dt) {
        this._timerShoot += dt;
        if (this._timerShoot >= 1) {
            var positionXPlayer = this.node.parent.getChildByName('player').x;
            var positionYPlayer = this.node.parent.getChildByName('player').y;
            this.shoot(positionXPlayer, positionYPlayer);
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
        //# sourceMappingURL=enemyPlayerShoot.js.map
        