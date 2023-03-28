import { CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer";
import Main3D from "./Main3D";

export default class CssRenderer{

    _renderer: CSS3DRenderer | undefined
    _scene
    _Main
    _sizes
    _cam
    
    constructor(){

        this._Main = new Main3D()
        this._scene = this._Main.scene
        this._sizes = this._Main.Sizes
        this._cam = this._Main.camera
        this._renderer = new CSS3DRenderer()

        this.setRenderer()
    }

    setRenderer(){
        if(!this._sizes || !this._renderer) return
        this._renderer.setSize(this._sizes.width, this._sizes.height)
        const div = document.getElementById("container")
        div?.appendChild(this._renderer.domElement)
    }

    resize(){
        if(!this._sizes || !this._renderer) return
        this._renderer.setSize(this._sizes.width, this._sizes.height)
    }

    update(){
        if(!this._renderer || !this._scene || !this._cam?.camera) return
        this._renderer?.render(this._scene, this._cam.camera)
    }
}