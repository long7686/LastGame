"use strict";
cc._RF.push(module, '91243O8KFlLbpbJq5+iciRw', 'BullShootDirection');
// Scripts/BullShootDirection.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        _speedBullet: 1000,
        laserGreenPre: cc.Prefab,
        bulletDamge: 0
    },

    onLoad: function onLoad() {},
    start: function start() {
        if (this.node.name === "RedBullet") {
            this.redBulletType();
            this.bulletDamge = 50;
        } else if (this.node.name === "OrangeBullet") {
            this.orangeBulletType();
            this.bulletDamge = 0.5;
        } else if (this.node.name === "GreenBullet") {
            this.greenBulletType();
        } else if (this.node.name === "BlueBullet") {
            this.blueBulletType();
            this.bulletDamge = 10;
        }
    },
    greenBulletType: function greenBulletType() {
        var _this = this;

        this._speedBullet = 400;
        cc.tween(this.node).by(0.6, { y: this._speedBullet }).call(function () {
            return _this.node.getComponent(cc.Animation).play();
        }).start();
    },
    blueBulletType: function blueBulletType() {
        var _this2 = this;

        this._speedBullet = 1000;
        cc.tween(this.node).by(1, { y: this._speedBullet }).call(function () {
            return _this2.node.destroy();
        }).start();
    },
    redBulletType: function redBulletType() {
        var _this3 = this;

        this._speedBullet = 500;
        if (this.node.angle == 0) {
            cc.tween(this.node).by(1, { y: this._speedBullet }).call(function () {
                return _this3.node.destroy();
            }).start();
        } else if (this.node.angle == 35) {
            cc.tween(this.node).by(1, { x: -this._speedBullet, y: this._speedBullet }).call(function () {
                return _this3.node.destroy();
            }).start();
        } else if (this.node.angle == -35) {
            cc.tween(this.node).by(1, { x: this._speedBullet, y: this._speedBullet }).call(function () {
                return _this3.node.destroy();
            }).start();
        }
    },
    orangeBulletType: function orangeBulletType() {
        var _this4 = this;

        var collisionCircle = this.node.getComponent(cc.CircleCollider);
        collisionCircle.enabled = false;
        this._speedBullet = 200;
        cc.tween(this.node).by(0.5, { y: this._speedBullet, angle: -360 * 2 }).call(function () {
            return collisionCircle.enabled = true;
        }).by(1, { scale: 4, angle: -360 * 2 }).by(1, { scale: -4, angle: -360 * 2, opacity: -150 }).call(function () {
            return _this4.node.destroy();
        }).start();
    },
    greenBulletAnimation: function greenBulletAnimation() {
        var lazer1 = cc.instantiate(this.laserGreenPre);
        lazer1.parent = cc.Canvas.instance.node;
        lazer1.position = this.node.position;
        lazer1.angle = 0;

        var lazer2 = cc.instantiate(this.laserGreenPre);
        lazer2.parent = cc.Canvas.instance.node;
        lazer2.position = this.node.position;
        lazer2.angle = 90;

        var lazer3 = cc.instantiate(this.laserGreenPre);
        lazer3.parent = cc.Canvas.instance.node;
        lazer3.position = this.node.position;
        lazer3.angle = 180;

        var lazer4 = cc.instantiate(this.laserGreenPre);
        lazer4.parent = cc.Canvas.instance.node;
        lazer4.position = this.node.position;
        lazer4.angle = 270;

        this.node.destroy();
    },
    onCollisionEnter: function onCollisionEnter(other, self) {
        if (self.tag != 3) {
            this.node.destroy();
        }

        if (other.node.group === "Enemies") {
            if (other.node.getComponent("enemyVerticalShoot") != null) {
                other.node.getComponent("enemyVerticalShoot").maxHealth -= this.bulletDamge;
                other.node.getComponent("enemyVerticalShoot").getDamage();
            } else if (other.node.getComponent("enemyThreeWayShoot") != null) {
                other.node.getComponent("enemyThreeWayShoot").maxHealth -= this.bulletDamge;
                other.node.getComponent("enemyThreeWayShoot").getDamage();
            } else if (other.node.getComponent("enemyPlayerShoot") != null) {
                other.node.getComponent("enemyPlayerShoot").maxHealth -= this.bulletDamge;
                other.node.getComponent("enemyPlayerShoot").getDamage();
            }
        } else if (other.node.group === "Boss") {
            other.node.getComponent("boss1").maxHealth -= this.bulletDamge;
            other.node.getComponent("boss1").getDamage();
        }
    },
    onCollisionStay: function onCollisionStay(other, self) {
        if (self.tag === 3) {
            if (other.node.group === "Enemies") {
                if (other.node.getComponent("enemyVerticalShoot") != null) {
                    other.node.getComponent("enemyVerticalShoot").maxHealth -= this.bulletDamge;
                    other.node.getComponent("enemyVerticalShoot").getDamage();
                } else if (other.node.getComponent("enemyThreeWayShoot") != null) {
                    other.node.getComponent("enemyThreeWayShoot").maxHealth -= this.bulletDamge;
                    other.node.getComponent("enemyThreeWayShoot").getDamage();
                } else if (other.node.getComponent("enemyPlayerShoot") != null) {
                    other.node.getComponent("enemyPlayerShoot").maxHealth -= this.bulletDamge;
                    other.node.getComponent("enemyPlayerShoot").getDamage();
                }
            } else if (other.node.group === "Boss") {
                other.node.getComponent("boss1").maxHealth -= this.bulletDamge;
                other.node.getComponent("boss1").getDamage();
            }
        }
    },
    playSound: function playSound() {}
});

cc._RF.pop();