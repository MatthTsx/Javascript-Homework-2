import Sizes from "./utils/Sizes"
import Timer from "./utils/Timer"
import * as THREE from 'three'
import Camera from "./camera"
import Renderer from "./renderer"
import World from "./world/World"
import CssRenderer from "./CssRenderer"
import _ScrollTrigger from "./animations/Scroll"

export default class Main3D {
    static instance_: any
    renderer
    camera
    scene
    Sizes
    Timer
    canvas
    World
    _css_renderer
    _scroll

    constructor(canvas?: HTMLCanvasElement){
        if(Main3D.instance_){
            return Main3D.instance_
        }
        Main3D.instance_ = this

        this.canvas = canvas
        this.Sizes = new Sizes()
        this.Timer = new Timer()
        this.scene = new THREE.Scene()
        this.camera = new Camera()
        this.renderer = new Renderer()
        this._css_renderer = new CssRenderer()

        this.World = new World()
        this._scroll = new _ScrollTrigger()

        this.Timer.on("update", () => this.update())
        this.Sizes.on("sizeChange", () => this.resize())
    }

    resize(){
        this.camera?.resize()
        this.renderer?.resize()
        this._css_renderer?.resize()
    }

    update(){
        this.renderer?.update()
        this._css_renderer?.update()
    }
}