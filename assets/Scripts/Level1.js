cc.Class({
    extends: cc.Component,

    properties: {
        pre1: cc.Prefab,
        pre2: cc.Prefab,
        _numberOfEnemies:0,
    },

    start () {
        cc.loader.loadRes("renderMap1.json", this.renderMap.bind(this))
        
    },

    renderMap(err, obj){
        if (err){
            cc.log(err)
            return;
        }

        let map = obj.json.Level1.wave1.map
        let mapCol = obj.json.Level1.wave1.collumn
        let mapRow = obj.json.Level1.wave1.row
        let numberOfEnemies = obj.json.Level1.wave1.numberOfEnemies
       
        this.renderWave(map, mapCol, mapRow)
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
                    enemy.position = cc.v2((canvasWid/collumn) * j- 420, (-(canvasHei/(2*row))*i)+250)
                }
                else if (map[index]=== 2){
                    let enemy = cc.instantiate(this.pre2)
                    enemy.parent = cc.Canvas.instance.node
                    enemy.position = cc.v2((canvasWid/collumn) * j- 420, (-(canvasHei/(2*row))*i)+250)
                }
                index++
            }   
        }
    },

    controlWave(){

    }


});
