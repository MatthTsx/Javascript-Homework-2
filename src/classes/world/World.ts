import * as THREE from 'three'
import * as CSS3 from 'three/examples/jsm/renderers/CSS3DRenderer'
import _ScrollTrigger from '../animations/Scroll'
import Main3D from '../Main3D'
import Environment from './envioment'

export default class World{
    
    static instance: any

    _Main:any
    _CSS
    _Camera
    _Sizes
    _Scene
    _environment:any
    _Scene2
    _obj1: THREE.Mesh | undefined
    _obj2: CSS3.CSS3DObject | undefined
    _test: undefined | _ScrollTrigger


    constructor(){

        if (World.instance){
            return World.instance
        }
        World.instance = this

        this._Main = new Main3D()
        this._Scene = this._Main.scene
        this._Sizes = this._Main.Sizes
        

        this._Camera = this._Main.camera
        this._CSS = this._Main._css_renderer
        this._environment = new Environment()
        this._Scene2 = new THREE.Scene()
        
        this.addObj()
        this.addOO()

    }
    
    addOO(){
        const geo = new THREE.BoxGeometry(200,200,200)
        const mat = new THREE.MeshBasicMaterial({ color: "green", opacity: 0.4 })
        this._obj1 = new THREE.Mesh(geo,mat)
        this._Scene?.add(this._obj1)
        this._test = new _ScrollTrigger()
    }

    addObj(){
        this._obj2 = new CSS3.CSS3DObject(document.getElementById("test") as HTMLElement)

        this._Scene?.add(this._obj2)
        this._obj2.position.set(1,1,1)
        const scale = 0.0015
        const scale2 = 0.0050
        this._obj2.scale.set( 1, 1, 1 );
    }
}