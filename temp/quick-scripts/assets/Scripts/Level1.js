(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/Level1.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '43a96hZ9z9IqoKJM8JCEM/U', 'Level1', __filename);
// Scripts/Level1.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        pre1: cc.Prefab,
        pre2: cc.Prefab,
        _map: null,
        _positonMap: null,
        _obj: {
            default: null,
            type: cc.node,
            idNumber: 0
        }
    },

    start: function start() {
        cc.loader.loadRes("renderMap1.json", this.renderMap.bind(this));
    },
    renderMap: function renderMap(err, obj) {
        if (err) {
            cc.log(err);
            return;
        }
        this._map = obj;
        this._positonMap = obj.json.Level2.wave2.map;
        var map = obj.json.Level1.wave2.map;
        var mapCol = obj.json.Level1.wave2.collumn;
        var mapRow = obj.json.Level1.wave2.row;
        this.renderWave(map, mapCol, mapRow);
    },
    renderWave: function renderWave(map, collumn, row) {
        var index = 0;
        var canvasWid = cc.Canvas.instance.node.getContentSize().width;
        var canvasHei = cc.Canvas.instance.node.getContentSize().height;
        for (var i = 0; i <= row - 1; i++) {
            for (var j = 0; j <= collumn - 1; j++) {
                if (map[index] === 1) {
                    this._obj = cc.instantiate(this.pre1);
                    this._obj.parent = cc.Canvas.instance.node;
                    this._obj.position = cc.v2(canvasWid / collumn * j - 420, -(canvasHei / (2 * row)) * i + 250);
                } else if (map[index] === 2) {
                    this._obj = cc.instantiate(this.pre2);
                    this._obj.parent = cc.Canvas.instance.node;
                    this._obj.position = cc.v2(canvasWid / collumn * j - 420, -(canvasHei / (2 * row)) * i + 250);
                }
                index++;
            }
        }
    }

    // actionEnemy(target){
    //     cc.tween(target)
    //         .repeatForever(
    //             cc.tween(target)
    //             .to(.5,{scale:1.2})
    //           .to(.5,{scale:1})
    //         )

    //         .start()
    // },

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
        //# sourceMappingURL=Level1.js.map
        