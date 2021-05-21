cc.Class({
    extends: cc.Component,

    properties: {
        startBtn: cc.Button,
        introduction: cc.Button,
        mainGame: cc.Node,
        
    },


    start () {

    },


    onStartClick(){
        this.node.active = false;
        this.mainGame.active = true;
    }
});
