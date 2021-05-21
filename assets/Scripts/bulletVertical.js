
cc.Class({
    extends: cc.Component,

    properties: {
        speed: 1,
        _heightCanvas: 0,
       
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this._heightCanvas = cc.Canvas.instance.node.getContentSize().height;
        cc.tween(this.node)
            .by(this.speed, {x:0, y: -500})
            .repeatForever().start();
    },

    update (dt) {
        if(this.node.y < -(this._heightCanvas/2 + this.node.height)){
            this.node.destroy();
        }
    },
});
