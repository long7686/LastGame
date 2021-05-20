const Emitter = require("EventsListener");
cc.Class({
    extends: cc.Component,

    properties: {
        greenBulletPre: cc.Prefab,
        blueBulletPre: cc.Prefab,
        redBulletPre: cc.Prefab,
        orangeBulletPre: cc.Prefab,
        _currentBullet: null,
        _currentPre: null,
        _greenFlag: false,
        _blueFlag: false,
        _redFlag: false,
        _orangeFlag: false,
        _canShootFlag: false,
        _countDown: 0,
    },

    onLoad () {
        Emitter.instance = new Emitter()
        Emitter.instance.registerEvent("skin", this.typeOfBullet.bind(this))
        Emitter.instance.registerEvent("letShoot", this.letShoot.bind(this))
    },

    typeOfBullet(greenFlag, blueFlag, redFlag, orangeFlag){
        this._canShootFlag = true
        this._countDown = 0
        if (greenFlag){
            this._currentPre = this.greenBulletPre      
        }
        else if(blueFlag){
            this._currentPre = this.blueBulletPre
        }
        else if(redFlag){
            this._currentPre = this.redBulletPre
        }
        else if(orangeFlag){
            this._currentPre = this.orangeBulletPre 
        }
    },

    letShoot(){
        this.bulletPos = this.node.convertToWorldSpaceAR(this.node.position);
        this.bulletPos = this.node.parent.parent.convertToNodeSpaceAR(this.bulletPos);
        if (this._canShootFlag){
            this._countDown = 0
            this._canShootFlag = false;
            if (this._currentPre != this.redBulletPre){
                this.currentBullet = cc.instantiate(this._currentPre)
                this.currentBullet.parent = cc.Canvas.instance.node
                this.currentBullet.position = this.bulletPos
            }
            else if (this._currentPre == this.redBulletPre){
                let redBullet1 = cc.instantiate(this._currentPre)
                redBullet1.parent = cc.Canvas.instance.node
                redBullet1.position = this.bulletPos

                let redBullet2 = cc.instantiate(this._currentPre)
                redBullet2.parent = cc.Canvas.instance.node
                redBullet2.position = this.bulletPos
                redBullet2.angle = 35

                let redBullet3 = cc.instantiate(this._currentPre)
                redBullet3.parent = cc.Canvas.instance.node
                redBullet3.position = this.bulletPos
                redBullet3.angle = -35
            }
           
        }  
    },

    update(){
        this.countTimeShoot()
    },

    countTimeShoot(){
        if(this._currentPre === this.greenBulletPre){
            this._countDown += 1
            if (this._countDown === 20){
                this._canShootFlag = true;
            }
        }
        else if(this._currentPre === this.blueBulletPre){
            this._countDown += 1
            if (this._countDown === 5){
                this._canShootFlag = true;
            }
        }
        else if (this._currentPre === this.redBulletPre){
            this._countDown += 1
            if (this._countDown === 40){
                this._canShootFlag = true;
            }
        }
        else if (this._currentPre === this.orangeBulletPre){
            this._countDown += 1
            if (this._countDown === 30){
                this._canShootFlag = true;     
            }
        }
        else{
            // this._canShootFlag = true;     
            this._countDown = 0
        }
    }
});
