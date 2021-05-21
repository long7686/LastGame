const Emitter = require("EventsListener")
cc.Class({
    extends: cc.Component,

    properties: {

    },


    // onLoad () {},

    start () {
        Emitter.instance.registerEvent("healthbar",this.health.bind(this))

    },

    health(playerHealth){
        this.node.getComponent(cc.ProgressBar).progress = playerHealth /100
        // this.node.progress
    },

    update (dt) {
        if ( this.node.getComponent(cc.ProgressBar).progress >=0.7 ){
            this.node.getChildByName("bar").color = cc.Color.GREEN
        }
        else if ((this.node.getComponent(cc.ProgressBar).progress <0.7) &&(this.node.getComponent(cc.ProgressBar).progress >0.3)){
            this.node.getChildByName("bar").color = cc.Color.YELLOW
        }
        else{
            this.node.getChildByName("bar").color = cc.Color.RED
        }
    },
});
