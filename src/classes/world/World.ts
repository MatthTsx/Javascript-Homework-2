import * as THREE from 'three'
import * as CSS3 from 'three/examples/jsm/renderers/CSS3DRenderer'
import Main3D from '../Main3D'
import Environment from './envioment'

export default class World{

    _Main
    _CSS
    _Camera
    _Sizes
    _Scene
    _environment
    _Scene2

    constructor(){

        this._Main = new Main3D()
        this._Scene = this._Main.scene
        this._Sizes = this._Main.Sizes
        

        this._Camera = this._Main.camera
        this._environment = new Environment()
        this._CSS = new CSS3.CSS3DRenderer()
        this._Scene2 = new THREE.Scene()
        
        this.setRender()

        this.resize()
        this.addObj()
        this.addOO()
        this.update()
    }

    setRender(){
        if(!this._Sizes) return
        this._CSS.setSize(this._Sizes.width, this._Sizes.height)
        const div = document.getElementById("container")
        div?.appendChild(this._CSS.domElement)
    }

    addOO(){
        const geo = new THREE.BoxGeometry(1,1,1)
        const mat = new THREE.MeshBasicMaterial({ color: "green", opacity: 0.4 })
        const mash = new THREE.Mesh(geo,mat)
        this._Scene?.add(mash)
    }

    resize(){
        if(!this._Sizes) return
        this._CSS.setSize(this._Sizes?.width, this._Sizes?.height)
    }

    addObj(){
        const obj = new CSS3.CSS3DObject(document.getElementById("test") as HTMLElement)

        this._Scene?.add(obj)
        obj.position.set(1,1,1)
        obj.scale.set( 0.0015, 0.0015, 0.0015 );
    }

    update(){
        if(!this._Scene || !this._Camera?.camera) return
        this._CSS.render(this._Scene, this._Camera.camera)
    }
}