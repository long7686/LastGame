cc.Class({
    extends: cc.Component,

    properties: {
       _speedLaser: 1000
    },


    start(){
        if (this.node.angle ===0){
            cc.tween(this.node)
            .by(1, {y: this._speedLaser})
            .call(() => this.node.destroy())
            .start()
        }
        else if(this.node.angle ===90){
            cc.tween(this.node)
            .by(1, {x: this._speedLaser})
            .call(() => this.node.destroy())
            .start()
        }
        else if(this.node.angle ===180){
            cc.tween(this.node)
            .by(1, {y: -this._speedLaser})
            .call(() => this.node.destroy())
            .start()
            
        }
        else if(this.node.angle ===270){
            cc.tween(this.node)
            .by(1, {x: -this._speedLaser})
            .call(() => this.node.destroy())
            .start()
        }
    }

});
