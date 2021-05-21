"use strict";
cc._RF.push(module, 'd729coScn1Cp7Ae59Rlt24+', 'gameOver');
// Scripts/gameOver.js

"use strict";

var Emitter = require("EventsListener");

cc.Class({
    extends: cc.Component,

    properties: {
        editBoxName: cc.EditBox,
        btnEnterName: cc.Button,
        btnHome: cc.Button,
        prefabRanking: cc.Prefab,
        scrollViewRanking: cc.ScrollView,
        _content: null,
        arrRanking: [],
        _time: 0
    },

    onLoad: function onLoad() {
        this._content = this.scrollViewRanking.node.getChildByName("view").getChildByName("content");
        Emitter.instance.registerEvent("endGame", this.getTime.bind(this));
        var rank = cc.sys.localStorage.getItem('ranked');
        if (rank !== null) {
            this.arrRanking = JSON.parse(rank);
        } else {
            this.arrRanking = [];
        }
    },
    getTime: function getTime(time) {
        this._time = time;
    },
    homeClick: function homeClick() {
        cc.director.loadScene("Game");
    },
    enterName: function enterName() {
        var newRank = {
            name: '',
            time: 0
        };
        newRank.name = this.editBoxName.string;
        newRank.time = Number(this._time);
        this.arrRanking.push(newRank);
        this.sortArrRanking(this.arrRanking);
        cc.sys.localStorage.setItem('ranked', JSON.stringify(this.arrRanking));

        this.showRanking(this.arrRanking);
        this.scrollViewRanking.node.active = true;
        this.btnEnterName.node.active = false;
        this.btnHome.node.active = true;
    },
    showRanking: function showRanking(arrayRanking) {
        var firstPositionPrefabs = 0;
        this._content.removeAllChildren(true);
        for (var i = 0; i < arrayRanking.length; i++) {
            var itemRanking = cc.instantiate(this.prefabRanking);
            var nameRanking = itemRanking.getChildByName('lblName');
            var timeRanking = itemRanking.getChildByName('lblTime');
            nameRanking.getComponent(cc.Label).string = arrayRanking[i].name;
            timeRanking.getComponent(cc.Label).string = this.timeConvert(arrayRanking[i].time);
            itemRanking.parent = this._content;
            itemRanking.y = firstPositionPrefabs -= 31;
        }
    },
    sortArrRanking: function sortArrRanking(arr) {
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[i].time > arr[j].time) {
                    // [arr[i], arr[j]] = [arr[j], arr[i]];
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    },
    timeConvert: function timeConvert(num) {
        var minutes = Math.floor(num / 60);
        if (minutes < 10) minutes = "0" + minutes;
        var seconds = num % 60;
        if (seconds < 10) seconds = "0" + seconds;
        return minutes + ":" + seconds;
    }
}

// update (dt) {},
);

cc._RF.pop();