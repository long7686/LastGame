cc.Class({
    extends: cc.Component,

    properties: {
        pre1: cc.Prefab,
        pre2: cc.Prefab,
        _map :null, 
        _positonMap: null,
        _obj:{
            default: null,
            type: cc.node,
            idNumber: 0
        }
    },

    start () {
        cc.loader.loadRes("renderMap1.json", this.renderMap.bind(this))
        
    },

    renderMap(err, obj){
        if (err){
            cc.log(err)
            return;
        }
        this._map = obj
        this._positonMap = obj.json.Level2.wave2.map
        let map = obj.json.Level1.wave2.map
        let mapCol = obj.json.Level1.wave2.collumn
        let mapRow = obj.json.Level1.wave2.row
        this.renderWave(map, mapCol, mapRow)
    },

    renderWave(map, collumn, row){
        let index = 0;
        let canvasWid = cc.Canvas.instance.node.getContentSize().width
        let canvasHei = cc.Canvas.instance.node.getContentSize().height
        for (let i = 0; i <= row-1; i++){
             for (let j = 0; j <= collumn-1; j++){
                if (map[index]=== 1){
                    this._obj = cc.instantiate(this.pre1)
                    this._obj.parent = cc.Canvas.instance.node
                    this._obj.position = cc.v2((canvasWid/collumn) * j- 420, (-(canvasHei/(2*row))*i)+250)
                }
                else if (map[index]=== 2){
                    this._obj = cc.instantiate(this.pre2)
                    this._obj.parent = cc.Canvas.instance.node
                    this._obj.position = cc.v2((canvasWid/collumn) * j- 420, (-(canvasHei/(2*row))*i)+250)
                }
                index++
            }   
        }
    }


    // actionEnemy(target){
    //     cc.tween(target)
    //         .repeatForever(
    //             cc.tween(target)
    //             .to(.5,{scale:1.2})
    //           .to(.5,{scale:1})
    //         )
            
    //         .start()
    // },
});
