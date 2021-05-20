"use strict";
cc._RF.push(module, '43a96hZ9z9IqoKJM8JCEM/U', 'Level1');
// Scripts/Level1.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        pre1: cc.Prefab,
        pre2: cc.Prefab,
        _numberOfEnemies: 0
    },

    start: function start() {
        cc.loader.loadRes("renderMap1.json", this.renderMap.bind(this));
    },
    renderMap: function renderMap(err, obj) {
        if (err) {
            cc.log(err);
            return;
        }

        var map = obj.json.Level1.wave1.map;
        var mapCol = obj.json.Level1.wave1.collumn;
        var mapRow = obj.json.Level1.wave1.row;
        var numberOfEnemies = obj.json.Level1.wave1.numberOfEnemies;

        this.renderWave(map, mapCol, mapRow);
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
                    enemy.position = cc.v2(canvasWid / collumn * j - 420, -(canvasHei / (2 * row)) * i + 250);
                } else if (map[index] === 2) {
                    var _enemy = cc.instantiate(this.pre2);
                    _enemy.parent = cc.Canvas.instance.node;
                    _enemy.position = cc.v2(canvasWid / collumn * j - 420, -(canvasHei / (2 * row)) * i + 250);
                }
                index++;
            }
        }
    },
    controlWave: function controlWave() {}
});

cc._RF.pop();