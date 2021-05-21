cc.Class({
    extends: cc.Component,

    properties: {
       _speedLaser: 1000,
       bulletDamge: 20,
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
    },

    onCollisionEnter(other, self){
        if (other.node.group === "Enemies"){
            if (other.node.getComponent("enemyVerticalShoot") != null){
                other.node.getComponent("enemyVerticalShoot").maxHealth -= this.bulletDamge
                cc.log(other.node.getComponent("enemyVerticalShoot").maxHealth)
            }
            else if (other.node.getComponent("enemyThreeWayShoot") != null){
                other.node.getComponent("enemyThreeWayShoot").maxHealth -= this.bulletDamge
                cc.log(other.node.getComponent("enemyThreeWayShoot").maxHealth)
            }
            else if (other.node.getComponent("enemyPlayerShoot") != null){
                other.node.getComponent("enemyPlayerShoot").maxHealth -= this.bulletDamge
                cc.log(other.node.getComponent("enemyPlayerShoot").maxHealth)
            }   
        }
    }

});
