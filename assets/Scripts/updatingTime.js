const Emitter = require("EventsListener")
cc.Class({
    extends: cc.Component,

    properties: {
        _timerUpdateTime: 0,
        _timeStart: {
            default: 0,
            serializable: false,
        },
        _timeNow: {
            default: 0,
            serializable: false,
        },
        _updating : true,
        totalTime:0,
    },

    onLoad () {
        Emitter.instance.registerEvent("endGame", this.stopUpdateTime.bind(this));
    },

    stopUpdateTime (){
        this._updating = false;
    },

    start(){

    },

    update(dt){
        this._timerUpdateTime +=dt;
        if(this._timerUpdateTime >1 && this._updating === true){
            this._timeNow +=1;
            this.updateTime(this._timeNow);
            this._timerUpdateTime =0;
        }
    },

    updateTime(timeNow){
        let result = (timeNow - this._timeStart) *1000;
        result = result.toLocaleString('it-IT');
        this.totalTime = result;
        // cc.log(this.totalTime);
        this.node.getComponent(cc.Label).string = this.timeConvert(result);
    },

    timeConvert(num)
    { 
        let minutes = Math.floor(num / 60);
        if(minutes < 10) minutes = "0" + minutes
        let seconds = num % 60;
        if(seconds < 10) seconds = "0" + seconds
        return minutes + ":" + seconds;
    },

});