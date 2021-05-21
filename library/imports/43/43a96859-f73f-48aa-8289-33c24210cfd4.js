"use strict";
cc._RF.push(module, '43a96hZ9z9IqoKJM8JCEM/U', 'Level1');
// Scripts/Level1.js

"use strict";

var Emitter = require("EventsListener");
cc.Class({
    extends: cc.Component,

    properties: {
        pre1: cc.Prefab,
        pre2: cc.Prefab,
        pre3: cc.Prefab,
        _map: null,
        _mapColl: null,
        _mapRow: null,
        _numberOfEnemiesDead: 0,
        numberOfEnemies: 0,
        jsonMap: null,
        waveID: 1,
        waveLabel: cc.Label,
        boss: cc.Node,
        _lastLabel: "this is Boss!!!"
    },

    onLoad: function onLoad() {
        var managerCollision = cc.director.getCollisionManager();
        managerCollision.enabled = true;
        managerCollision.enabledDebugDraw = false;
    },
    start: function start() {
        Emitter.instance.registerEvent("countEnemies", this.controlWave.bind(this));
        cc.loader.loadRes("renderMap1.json", this.renderMap.bind(this));
    },
    renderMap: function renderMap(err, obj) {
        var _this = this;

        if (err) {
            cc.log(err);
            return;
        }
        this.waveID = 1;
        this.jsonMap = obj;
        this._map = this.jsonMap.json.Level1.wave1.map;
        this._mapColl = this.jsonMap.json.Level1.wave1.collumn;
        this._mapRow = this.jsonMap.json.Level1.wave1.row;
        this.numberOfEnemies = this.jsonMap.json.Level1.wave1.numberOfEnemies;
        this.waveLabel.node.active = true;
        this.waveLabel.node.scale = 0;
        cc.tween(this.waveLabel.node).to(1, { scale: 1 }).to(.5, { opacity: 0 }).to(.5, { opacity: 255 }).to(.5, { opacity: 0 }).to(.5, { opacity: 255 }).to(1, { scale: 0 }).call(function () {
            return _this.waveLabel.node.active = false;
        }).call(function () {
            return _this.renderWave(_this._map, _this._mapColl, _this._mapRow);
        }).start();
    },
    renderWave: function renderWave(map, collumn, row) {
        var index = 0;
        var canvasWid = cc.Canvas.instance.node.getContentSize().width;
        var canvasHei = cc.Canvas.instance.node.getContentSize().height;
        for (var i = 0; i <= row - 1; i++) {
            for (var j = 0; j <= collumn - 1; j++) {
                if (map[index] === 1) {
                    var enemy = cc.instantiate(this.pre1);
                    enemy.parent = cc.Canvas.instance.node;
                    enemy.position = cc.v2(0, canvasHei);
                    //enemy.position = cc.v2((canvasWid/collumn) * j- 420, (-(canvasHei/(2*row))*i)+250)
                    enemy.getComponent('enemyVerticalShoot').moveToX = canvasWid / collumn * j - 420;
                    enemy.getComponent('enemyVerticalShoot').moveToY = -(canvasHei / (2 * row)) * i + 250;
                } else if (map[index] === 2) {
                    var _enemy = cc.instantiate(this.pre2);
                    _enemy.parent = cc.Canvas.instance.node;
                    _enemy.position = cc.v2(canvasWid / collumn * j - 420, -(canvasHei / (2 * row)) * i + 250);
                    _enemy.position = cc.v2(0, canvasHei);
                    _enemy.getComponent('enemyThreeWayShoot').moveToX = canvasWid / collumn * j - 420;
                    _enemy.getComponent('enemyThreeWayShoot').moveToY = -(canvasHei / (2 * row)) * i + 250;
                } else if (map[index] === 3) {
                    var _enemy2 = cc.instantiate(this.pre3);
                    _enemy2.parent = cc.Canvas.instance.node;
                    _enemy2.position = cc.v2(canvasWid / collumn * j - 420, -(canvasHei / (2 * row)) * i + 250);
                    _enemy2.position = cc.v2(0, canvasHei);
                    _enemy2.getComponent('enemyPlayerShoot').moveToX = canvasWid / collumn * j - 420;
                    _enemy2.getComponent('enemyPlayerShoot').moveToY = -(canvasHei / (2 * row)) * i + 250;
                }
                index++;
            }
        }
    },
    controlWave: function controlWave() {
        this._numberOfEnemiesDead++;
        if (this._numberOfEnemiesDead === this.numberOfEnemies) {
            if (this.waveID !== 6) {
                this.waveID++;
            }
            this.waveList();
            this._numberOfEnemiesDead = 0;
            //call function label wave and render wave
        }
    },
    waveList: function waveList() {
        var _this2 = this;

        var isLastWave = false;

        if (this.waveID === 2) {
            this._map = this.jsonMap.json.Level1.wave2.map;
            this._mapColl = this.jsonMap.json.Level1.wave2.collumn;
            this._mapRow = this.jsonMap.json.Level1.wave2.row;
            this.numberOfEnemies = this.jsonMap.json.Level1.wave2.numberOfEnemies;
        } else if (this.waveID === 3) {
            this._map = this.jsonMap.json.Level1.wave3.map;
            this._mapColl = this.jsonMap.json.Level1.wave3.collumn;
            this._mapRow = this.jsonMap.json.Level1.wave3.row;
            this.numberOfEnemies = this.jsonMap.json.Level1.wave3.numberOfEnemies;
        } else if (this.waveID === 4) {
            this._map = this.jsonMap.json.Level1.wave4.map;
            this._mapColl = this.jsonMap.json.Level1.wave4.collumn;
            this._mapRow = this.jsonMap.json.Level1.wave4.row;
            this.numberOfEnemies = this.jsonMap.json.Level1.wave4.numberOfEnemies;
        } else if (this.waveID === 5) {
            this._map = this.jsonMap.json.Level1.wave5.map;
            this._mapColl = this.jsonMap.json.Level1.wave5.collumn;
            this._mapRow = this.jsonMap.json.Level1.wave5.row;
            this.numberOfEnemies = this.jsonMap.json.Level1.wave5.numberOfEnemies;
        } else if (this.waveID === 6) {
            isLastWave = true;
            this._map = this.jsonMap.json.Level1.wave6.map;
            this._mapColl = this.jsonMap.json.Level1.wave6.collumn;
            this._mapRow = this.jsonMap.json.Level1.wave6.row;
            this.numberOfEnemies = this.jsonMap.json.Level1.wave6.numberOfEnemies;
        }
        if (!isLastWave) {
            this.waveLabel.string = "Wave " + this.waveID;
            this.waveLabel.node.active = true;
            this.waveLabel.node.scale = 0;
            cc.tween(this.waveLabel.node).to(1, { scale: 1 }).to(.5, { opacity: 0 }).to(.5, { opacity: 255 }).to(.5, { opacity: 0 }).to(.5, { opacity: 255 }).to(1, { scale: 0 }).call(function () {
                return _this2.waveLabel.node.active = false;
            }).call(function () {
                return _this2.renderWave(_this2._map, _this2._mapColl, _this2._mapRow);
            }).start();
        } else {
            this.waveLabel.string = this._lastLabel;
            this.waveLabel.node.active = true;
            this.waveLabel.node.scale = 0;
            cc.tween(this.waveLabel.node).to(1, { scale: 1 }).to(.5, { opacity: 0 }).to(.5, { opacity: 255 }).to(.5, { opacity: 0 }).to(.5, { opacity: 255 }).to(1, { scale: 0 }).call(function () {
                return _this2._lastLabel = "";
            }).call(function () {
                return _this2.waveLabel.node.active = false;
            }).call(function () {
                return _this2.renderWave(_this2._map, _this2._mapColl, _this2._mapRow);
            }).call(function () {
                return _this2.boss.active = true;
            }).start();
        }
    }
});

cc._RF.pop();