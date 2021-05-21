const Emitter = require("EventsListener")
cc.Class({
    extends: cc.Component,

    properties: {
        _mousePos: cc.v2,
        playerHealth: 100,
        _currentSkin: null,
        spriteFrameGreen: {
            default: null,
            type: cc.SpriteFrame,
            _flag: false
        },

        spriteFrameBlue: {
            default: null,
            type: cc.SpriteFrame,
            _flag: false,
        },

        spriteFrameRed: {
            default: null,
            type: cc.SpriteFrame,
            _flag: false,
        },

        spriteFrameOrange: {
            default: null,
            type: cc.SpriteFrame,
            _flag: false 
        },
        timing: cc.Label,
        nodeEndGame: cc.Node
    },


    onLoad () {
        cc.Canvas.instance.node.on("mousemove", this.getMousePosition.bind(this))
        this.node.on("mousedown", this.shoot, this)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this._currentSkin = this.node.getComponent(cc.Sprite)
    },

    getMousePosition(event){
        this._mousePos = event.getLocation()
    },

    shoot(event){
        if (event._button === 0){
            Emitter.instance.emit("letShoot")
        }
    },

    onKeyDown(event){
        if (this.node !== null){
            this.spriteFrameGreen._flag = false
            this.spriteFrameBlue._flag = false
            this.spriteFrameRed._flag = false
            this.spriteFrameOrange._flag = false
            switch(event.keyCode){
                case cc.macro.KEY.z:
                    this.spriteFrameGreen._flag = true
                    this.changeSkin()
                    break;
                case cc.macro.KEY.x:
                    this.spriteFrameBlue._flag = true
                    this.changeSkin()
                    break;
                case cc.macro.KEY.c:
                    this.spriteFrameRed._flag = true
                    this.changeSkin()
                    break;
                case cc.macro.KEY.v:
                    this.spriteFrameOrange._flag = true
                    this.changeSkin()
                    break;
            }
        }
    },    

    update (dt) {
        let myCanvasSize = cc.Canvas.instance.node.getContentSize()
        if (this._mousePos != null){
            this.node.position = cc.v2(this._mousePos.x - (myCanvasSize.width/2), this._mousePos.y - (myCanvasSize.height/2)) 
        }   
    },

    changeSkin(){
        if (this.spriteFrameGreen._flag){
            this._currentSkin.spriteFrame = this.spriteFrameGreen
            Emitter.instance.emit("skin", this.spriteFrameGreen._flag, this.spriteFrameBlue._flag, this.spriteFrameRed._flag, this.spriteFrameOrange._flag)
        }
        else if(this.spriteFrameBlue._flag){
            this._currentSkin.spriteFrame = this.spriteFrameBlue
            Emitter.instance.emit("skin", this.spriteFrameGreen._flag, this.spriteFrameBlue._flag, this.spriteFrameRed._flag, this.spriteFrameOrange._flag)
        }
        else if(this.spriteFrameRed._flag){
            this._currentSkin.spriteFrame = this.spriteFrameRed
            Emitter.instance.emit("skin", this.spriteFrameGreen._flag, this.spriteFrameBlue._flag, this.spriteFrameRed._flag, this.spriteFrameOrange._flag)
        }
        else if (this.spriteFrameOrange._flag){
            this._currentSkin.spriteFrame = this.spriteFrameOrange
            Emitter.instance.emit("skin", this.spriteFrameGreen._flag, this.spriteFrameBlue._flag, this.spriteFrameRed._flag, this.spriteFrameOrange._flag)
        }
    },

    onCollisionEnter(other, self){
        if ((other.node.group == "Enemies")||(other.node.group == "Boss")){
            this.dead()
        }
        else if (other.node.group == "Enemies Bullet"){
            other.node.destroy()
            this.playerHealth -= 10
                if (this.playerHealth<=0){
                    Emitter.instance.emit("healthbar",this.playerHealth)
                    this.dead()
                }
                else{
                    this.getDamge()
                }
        }
    },

    getDamge(){
        Emitter.instance.emit("healthbar",this.playerHealth)
        cc.tween(this.node)
            .to(0.1,{opacity: 155})
            .to(0.1,{opacity: 255})
            .to(0.1,{opacity: 155})
            .to(0.1,{opacity: 255})
            .to(0.1,{opacity: 155})
            .to(0.1,{opacity: 255})
            .start()
    },

    dead(){
        let totalTime = this.timing.getComponent('updatingTime').totalTime;
        this.nodeEndGame.active = true;
        Emitter.instance.emit("playerDead")
        Emitter.instance.emit("endGame", totalTime)
        this.node.destroy()
    },
     
    
});
