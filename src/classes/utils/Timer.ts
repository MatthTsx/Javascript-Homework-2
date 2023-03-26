import EventEmitter from "events";


export default class Timer extends EventEmitter{

    current
    delta
    ElapsedTimer

    constructor(){
        super()
        this.delta = 1000/60
        this.current = Date.now()
        this.ElapsedTimer = 0
        
        this.update()
    }
    
    update(){
        const currentTime = Date.now()
        this.ElapsedTimer = currentTime - this.current

        if(this.ElapsedTimer >= this.delta){
            this.emit("update")
            this.current = currentTime
            this.ElapsedTimer = 0
        }

        window.requestAnimationFrame(() => this.update())
    }

}