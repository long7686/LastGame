cc.Class({
    extends: cc.Component,

    properties: {
        startBtn: cc.Button,
        introduction: cc.Node,
        mainGame: cc.Node,
        
    },


    start () {

    },
    onIntroClick(){
        this.node.active = false;
        this.introduction.active = true;
    },

    onStartClick(){
        this.node.active = false;
        this.mainGame.active = true;
    }
});
