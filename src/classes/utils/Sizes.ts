import EventEmitter from "events";


export default class Sizes extends EventEmitter{

    width
    height
    AspectRatio
    PixelRatio

    constructor(){
        super()

        this.width = window.innerWidth
        this.height = window.innerHeight
        this.PixelRatio = Math.min(window.devicePixelRatio)
        this.AspectRatio = this.width / this.height

        window.addEventListener("resize", () => this.update())
    }

    update(){
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.PixelRatio = Math.min(window.devicePixelRatio, 2)
        this.AspectRatio = this.width / this.height

        this.emit("sizeChange")
    }

}