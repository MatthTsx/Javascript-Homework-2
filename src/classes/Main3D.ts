import Sizes from "./utils/Sizes"
import Timer from "./utils/Timer"
import * as THREE from 'three'
import Camera from "./camera"
import Renderer from "./renderer"
import World from "./world/World"

export default class Main3D {
    static instance_: any
    renderer
    camera
    scene
    Sizes
    Timer
    canvas
    World

    constructor(canvas?: HTMLCanvasElement){
        if(Main3D.instance_){
            return Main3D.instance_
        }
        Main3D.instance_ = this

        this.scene = new THREE.Scene()
        this.canvas = canvas
        this.camera = new Camera()
        this.Sizes = new Sizes()
        this.Timer = new Timer()
        this.renderer = new Renderer()

        this.World = new World()

        this.Timer.on("update", () => this.update())

        this.Sizes.on("sizeChange", () => this.resize())
    }

    resize(){
        this.camera?.resize()
        this.renderer?.resize()
        this.World?.resize()
    }

    update(){
        this.renderer?.update()
        this.World?.update()
    }
}