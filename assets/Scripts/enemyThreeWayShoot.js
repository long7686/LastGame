const Emitter = require("EventsListener")
cc.Class({
    extends: cc.Component,

    properties: {
        moveToX: 0, // vị trí x bay đến
        moveToY: 0, // vị trí y bay đến
        prefabBullet : cc.Prefab,
        _timerShoot: 0,
        maxHealth :100,
        healthBar: cc.ProgressBar
    },

    start () {
        this.moving();
    },

    moving(){
        let randomAction = Math.random()
        cc.tween(this.node)
            .to(1.5, {x: this.moveToX, y: this.moveToY})
            .call(() =>{
                if (randomAction >0.5){
                    this.standingAction1()
                }
                else{
                    this.standingAction2()
                }
            })
            .start();
    },

    shoot(){
        let bulletPos = this.node.convertToWorldSpaceAR(this.node.position);
        bulletPos = this.node.convertToNodeSpaceAR(bulletPos);
        
        let redBullet1 = cc.instantiate(this.prefabBullet);
        redBullet1.parent = cc.Canvas.instance.node;
        redBullet1.setPosition(bulletPos.x, bulletPos.y);
        redBullet1.getComponent('bulletThreeWay').bulletNumber = 1;



        let redBullet2 = cc.instantiate(this.prefabBullet)
        redBullet2.parent = cc.Canvas.instance.node
        redBullet2.setPosition(bulletPos.x, bulletPos.y);
        redBullet2.getComponent('bulletThreeWay').bulletNumber = 2;


        let redBullet3 = cc.instantiate(this.prefabBullet)
        redBullet3.parent = cc.Canvas.instance.node
        redBullet3.setPosition(bulletPos.x, bulletPos.y);
        redBullet3.getComponent('bulletThreeWay').bulletNumber = 3;

    },


    standingAction1(){
        cc.tween(this.node)
            .repeatForever(
                cc.tween(this.node)
                    .by(1,{x:10})
                    .by(2,{x:-20})
                    .by(1,{x:10})
            )
            .start()
    },

    standingAction2(){
        cc.tween(this.node)
            .repeatForever(
                cc.tween(this.node)
                    .by(1,{x:-10})
                    .by(2,{x:20})
                    .by(1,{x:-10})
            )
            .start()
    },

    update (dt) {
        this._timerShoot+= dt;
        if(this._timerShoot >= 2){
            this.shoot();
            this._timerShoot= 0;
        }
        if (this.maxHealth <= 0){
            this.dead()
        }
    },

    getDamage(){
        this.healthBar.getComponent(cc.ProgressBar).progress= this.maxHealth/100
    },

    dead(){
        Emitter.instance.emit("countEnemies")
         this.node.destroy()
    }
});
