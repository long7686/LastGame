cc.Class({
    extends: cc.Component,

    properties: {
        menuStart: cc.Node,

    },


    onBackClick(){
        this.menuStart.active = true;
        this.node.active = false
    }

});
