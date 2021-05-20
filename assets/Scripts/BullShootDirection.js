cc.Class({
    extends: cc.Component,

    properties: {
        _speedBullet: 1000,
        laserGreenPre: cc.Prefab,
    },

    onLoad () {
        
    },

    start () {
        if(this.node.name === "RedBullet"){
            this.redBulletType()
        }
        else if(this.node.name === "OrangeBullet"){
            this.orangeBulletType()
        }
        else if(this.node.name === "GreenBullet"){
            this.greenBulletType()
        }
        else if (this.node.name === "BlueBullet"){
            this.blueBulletType()
        }

    },

    greenBulletType(){
        this._speedBullet = 250
        cc.tween(this.node)
            .by(1, {y: this._speedBullet})
            .call(() => this.node.getComponent(cc.Animation).play())
            .start()
    },

    blueBulletType(){
        this._speedBullet = 1000
        cc.tween(this.node)
            .by(1, {y: this._speedBullet})
            .call(() => this.node.destroy())
            .start()
    },

    redBulletType(){
        this._speedBullet = 500
        if (this.node.angle == 0){
            cc.tween(this.node)
            .by(1, {y: this._speedBullet})
            .call(() => this.node.destroy())
            .start()
        }
        else if(this.node.angle == 35){
            cc.tween(this.node)
            .by(1, {x: -this._speedBullet , y: this._speedBullet})
            .call(() => this.node.destroy())
            .start()
        }
        else if(this.node.angle == -35){
            cc.tween(this.node)
            .by(1, {x: this._speedBullet , y: this._speedBullet})
            .call(() => this.node.destroy())
            .start()
        }
        
        
    },

    orangeBulletType(){
        this._speedBullet = 200
        cc.tween(this.node)
            .by(0.5, {y: this._speedBullet, angle:-360*2})
            .by(1, {scale:4,angle:-360*2})
            .by(1, {scale:-4,angle:-360*2, opacity:-150})
            .call(() => this.node.destroy())
            .start()
    },

    greenBulletAnimation(){
        let lazer1 = cc.instantiate(this.laserGreenPre)
        lazer1.parent = cc.Canvas.instance.node
        lazer1.position = this.node.position
        lazer1.angle = 0

        let lazer2 = cc.instantiate(this.laserGreenPre)
        lazer2.parent = cc.Canvas.instance.node
        lazer2.position = this.node.position
        lazer2.angle = 90

        let lazer3 = cc.instantiate(this.laserGreenPre)
        lazer3.parent = cc.Canvas.instance.node
        lazer3.position = this.node.position
        lazer3.angle = 180

        let lazer4 = cc.instantiate(this.laserGreenPre)
        lazer4.parent = cc.Canvas.instance.node
        lazer4.position = this.node.position
        lazer4.angle = 270

        this.node.destroy()
    },

    playSound(){

    },
});