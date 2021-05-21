"use strict";
cc._RF.push(module, '71bb7OlAmpPWIN3p0M1UYFw', 'boss1');
// Scripts/boss1.js

"use strict";

var Emitter = require("EventsListener");
cc.Class({
    extends: cc.Component,

    properties: {
        maxHealth: {
            default: 1000,
            serializable: false
        },
        _timerHit: 0,
        prefabBullet: cc.Prefab,
        healthBar: cc.ProgressBar,
        timing: cc.Label,
        nodeEndGame: cc.Node,
        playerNode: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.moveIn();
    },
    movingBoss: function movingBoss() {
        var widthCanvas = cc.Canvas.instance.node.getContentSize().width;
        var widthBoss = this.node.width;

        var moving = cc.tween().to(3, { x: widthCanvas / 2 - widthBoss / 2 }).to(0.01, { scaleX: -1 }).to(6, { x: -(widthCanvas / 2 - widthBoss / 2) }).to(0.01, { scaleX: 1 }).to(3, { x: 0 });
        cc.tween(this.node).then(moving).repeatForever().start();
    },
    moveIn: function moveIn() {
        var _this = this;

        cc.tween(this.node).to(1, { position: cc.v2(-27, 120) }).call(function () {
            return _this.movingBoss();
        }).start();
    },
    actionHit: function actionHit() {
        this.node.getComponent(cc.Animation).play("bossHit");
    },
    hit: function hit() {
        var positionXBullet = this.node.x - 80;
        var positionYBullet = this.node.y - 80;

        for (var i = 1; i <= 4; i++) {
            var bulletBoss = cc.instantiate(this.prefabBullet);

            bulletBoss.setPosition(positionXBullet, positionYBullet);
            bulletBoss.parent = this.node.parent;

            if (i === 1) {
                positionYBullet -= 80;
            }
            if (i === 3) {
                positionYBullet += 80;
            }
            positionXBullet += 80;

            bulletBoss.getComponent('bulletBoss').bulletNumber = i;
        }
    },
    deathBoss: function deathBoss() {
        var totalTime = this.timing.getComponent('updatingTime').totalTime;
        this.nodeEndGame.active = true;
        Emitter.instance.emit("endGame", totalTime);
        this.node.stopAllActions();
        this.node.destroy();
        this.playerNode.destroy();
    },
    update: function update(dt) {
        this._timerHit += dt;
        if (this._timerHit > 1.5) {
            this.actionHit();
            this._timerHit = 0;
        }
    },
    getDamage: function getDamage() {
        this.healthBar.getComponent(cc.ProgressBar).progress = this.maxHealth / 1000;
        if (this.maxHealth <= 0) {
            this.deathBoss();
        }
        cc.tween(this.node).to(0.1, { opacity: 155 }).to(0.1, { opacity: 255 }).to(0.1, { opacity: 155 }).to(0.1, { opacity: 255 }).to(0.1, { opacity: 155 }).to(0.1, { opacity: 255 }).start();
    }
});

cc._RF.pop();