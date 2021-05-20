(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/boss1.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '71bb7OlAmpPWIN3p0M1UYFw', 'boss1', __filename);
// Scripts/boss1.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        health: 0,
        prefabBoss: cc.Prefab,
        _timerDeath: 0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.movingBoss();
    },
    movingBoss: function movingBoss() {
        var widthCanvas = cc.Canvas.instance.node.getContentSize().width;
        var widthBoss = this.node.width;

        var moving = cc.tween().to(3, { x: widthCanvas / 2 - widthBoss / 2 }).to(0.01, { scaleX: -1 }).to(6, { x: -(widthCanvas / 2 - widthBoss / 2) }).to(0.01, { scaleX: 1 }).to(3, { x: 0 });
        cc.tween(this.node).then(moving).repeatForever().start();
    },
    deathBoss: function deathBoss() {
        this.node.destroy();
        this.createClone();
    },
    createClone: function createClone() {
        for (var i = 1; i <= 2; i++) {
            var miniBoss = cc.instantiate(this.prefabBoss);
            miniBoss.setPosition(this.node.x, this.node.y);
            miniBoss.parent = this.node.parent;
            if (i === 1) {
                miniBoss.getComponent('prefabBoss').movingRight = false;
            }
            miniBoss.getComponent('prefabBoss').settingWidth = this.node.width * 2 / 3;
            miniBoss.getComponent('prefabBoss').settingHeight = this.node.height * 2 / 3;
        }
    },
    update: function update(dt) {
        this._timerDeath += dt;
        if (this._timerDeath >= 5 && this.health === 0) {
            cc.log('asd');
            this.deathBoss();
            this.health = 10;
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
        //# sourceMappingURL=boss1.js.map
        