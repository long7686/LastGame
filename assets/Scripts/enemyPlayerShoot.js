const Emitter = require("EventsListener")
cc.Class({
    extends: require("enemyNoShoot"),

    properties: {
        prefabBullet : cc.Prefab,
        _timerShoot : 0,
        maxHealth:100,
        healthBar: cc.ProgressBar
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.moving()
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

    shoot(bulletToX, bulletToY){
        let bulletPos = this.node.convertToWorldSpaceAR(this.node.position);
        bulletPos = this.node.convertToNodeSpaceAR(bulletPos);

        let enemyBullet = cc.instantiate(this.prefabBullet);
        enemyBullet.setPosition(bulletPos.x, bulletPos.y);
        enemyBullet.parent = this.node.parent;
        
        enemyBullet.getComponent('bulletPlayer').bulletToX = bulletToX;
        enemyBullet.getComponent('bulletPlayer').bulletToY = bulletToY;
        // cc.log(bulletToX, bulletToY)

    },

    update (dt) {
        this._timerShoot+= dt;
        if(this._timerShoot >= 1){
            let positionXPlayer = this.node.parent.getChildByName('Main Game').getChildByName('Player').x;
            let positionYPlayer = this.node.parent.getChildByName('Main Game').getChildByName('Player').y;
            //cc.log(this.node.parent);
            this.shoot(positionXPlayer, positionYPlayer);
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
