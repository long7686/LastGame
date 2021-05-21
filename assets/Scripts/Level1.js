const Emitter = require("EventsListener")
cc.Class({
    extends: cc.Component,

    properties: {
        pre1: cc.Prefab,
        pre2: cc.Prefab,
        pre3: cc.Prefab,
        _map: null,
        _mapColl: null,
        _mapRow: null,
        _numberOfEnemiesDead:0,
        numberOfEnemies: 0,
        jsonMap: null,
        waveID: 1,
        waveLabel: cc.Label,
    },

    onLoad(){
        let managerCollision = cc.director.getCollisionManager();
        managerCollision.enabled = true;
        managerCollision.enabledDebugDraw = true
    },

    start () {
        Emitter.instance.registerEvent("countEnemies", this.controlWave.bind(this))
        cc.loader.loadRes("renderMap1.json", this.renderMap.bind(this)) 
        cc.log()
    },

    renderMap(err, obj){
        if (err){
            cc.log(err)
            return;
        }
        this.waveID = 1
        this.jsonMap = obj
        this._map = this.jsonMap.json.Level1.wave1.map
        this._mapColl = this.jsonMap.json.Level1.wave1.collumn
        this._mapRow = this.jsonMap.json.Level1.wave1.row
        this.numberOfEnemies = this.jsonMap.json.Level1.wave1.numberOfEnemies
        this.waveLabel.node.active = true;
        this.waveLabel.node.scale = 0
        cc.tween(this.waveLabel.node)
        .to(1,{scale: 1})
        .to(.5,{opacity: 0})
        .to(.5,{opacity: 255})
        .to(.5,{opacity: 0})
        .to(.5,{opacity: 255})
        .to(1,{scale: 0})
        .call(() => this.waveLabel.node.active = false)
        .call(() => this.renderWave(this._map, this._mapColl, this._mapRow))
        .start()
        
    },

    renderWave(map, collumn, row){
        let index = 0;
        let canvasWid = cc.Canvas.instance.node.getContentSize().width
        let canvasHei = cc.Canvas.instance.node.getContentSize().height
        for (let i = 0; i <= row-1; i++){
             for (let j = 0; j <= collumn-1; j++){
                if (map[index]=== 1){
                    let enemy = cc.instantiate(this.pre1)
                    enemy.parent = cc.Canvas.instance.node
                    enemy.position = cc.v2(0, canvasHei)
                    //enemy.position = cc.v2((canvasWid/collumn) * j- 420, (-(canvasHei/(2*row))*i)+250)
                    enemy.getComponent('enemyVerticalShoot').moveToX = (canvasWid/collumn) * j- 420;
                    enemy.getComponent('enemyVerticalShoot').moveToY = (-(canvasHei/(2*row))*i)+250;
                }
                else if (map[index]=== 2){
                    let enemy = cc.instantiate(this.pre2)
                    enemy.parent = cc.Canvas.instance.node
                    enemy.position = cc.v2((canvasWid/collumn) * j- 420, (-(canvasHei/(2*row))*i)+250)
                    enemy.position = cc.v2(0, canvasHei)
                    enemy.getComponent('enemyThreeWayShoot').moveToX = (canvasWid/collumn) * j- 420;
                    enemy.getComponent('enemyThreeWayShoot').moveToY = (-(canvasHei/(2*row))*i)+250;
                }
                else if (map[index]=== 3){
                    let enemy = cc.instantiate(this.pre3)
                    enemy.parent = cc.Canvas.instance.node
                    enemy.position = cc.v2((canvasWid/collumn) * j- 420, (-(canvasHei/(2*row))*i)+250)
                    enemy.position = cc.v2(0, canvasHei)
                    enemy.getComponent('enemyPlayerShoot').moveToX = (canvasWid/collumn) * j- 420;
                    enemy.getComponent('enemyPlayerShoot').moveToY = (-(canvasHei/(2*row))*i)+250;
                }
                index++
            }   
        }
    },

    controlWave(){
        this._numberOfEnemiesDead++
        if (this._numberOfEnemiesDead === this.numberOfEnemies){
            this.waveID++
            this.waveList()
            this._numberOfEnemiesDead =0
            //call function label wave and render wave
        }
    },


    waveList(){
        if (this.waveID === 2){
            this._map = this.jsonMap.json.Level1.wave2.map
            this._mapColl = this.jsonMap.json.Level1.wave2.collumn
            this._mapRow = this.jsonMap.json.Level1.wave2.row
            this.numberOfEnemies = this.jsonMap.json.Level1.wave2.numberOfEnemies
        }
        else if(this.waveID ===3){
            this._map = this.jsonMap.json.Level1.wave3.map
            this._mapColl = this.jsonMap.json.Level1.wave3.collumn
            this._mapRow = this.jsonMap.json.Level1.wave3.row
            this.numberOfEnemies = this.jsonMap.json.Level1.wave3.numberOfEnemies
        }
        else if(this.waveID ===4){
            this._map = this.jsonMap.json.Level1.wave4.map
            this._mapColl = this.jsonMap.json.Level1.wave4.collumn
            this._mapRow = this.jsonMap.json.Level1.wave4.row
            this.numberOfEnemies = this.jsonMap.json.Level1.wave4.numberOfEnemies
        }
        else if(this.waveID ===5){
            this._map = this.jsonMap.json.Level1.wave5.map
            this._mapColl = this.jsonMap.json.Level1.wave5.collumn
            this._mapRow = this.jsonMap.json.Level1.wave5.row
            this.numberOfEnemies = this.jsonMap.json.Level1.wave5.numberOfEnemies
        }

        this.waveLabel.string = "Wave " + this.waveID
        this.waveLabel.node.active = true;
        this.waveLabel.node.scale = 0
        cc.tween(this.waveLabel.node)
        .to(1,{scale: 1})
        .to(.5,{opacity: 0})
        .to(.5,{opacity: 255})
        .to(.5,{opacity: 0})
        .to(.5,{opacity: 255})
        .to(1,{scale: 0})
        .call(() => this.waveLabel.node.active = false)
        .call(() => this.renderWave(this._map, this._mapColl, this._mapRow))
        .start()
    }

});
