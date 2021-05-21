
cc.Class({
    extends: cc.Component,

    properties: {
    },

    start () {
    },

    update (dt) {
        if(this.node.y > -this.node.height){
            this.node.y -= 5;
        }else{
            this.node.y = this.node.height;
        }    
    },
});
