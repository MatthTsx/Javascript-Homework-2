import * as THREE from 'three'
import * as CSS3 from 'three/examples/jsm/renderers/CSS3DRenderer'
import { assets } from '~/constants'
import _ScrollTrigger from '../animations/Scroll'
import Main3D from '../Main3D'
import Environment from './envioment'
import Resources from './resource'

export default class World{
    

    _Main:any
    _CSS
    _Camera
    _Sizes
    _Scene
    _environment:any
    _resources
    _Loaded: boolean = false

    _obj1: THREE.Mesh | undefined
    _obj2: CSS3.CSS3DObject | undefined

    constructor(){

        this._Main = new Main3D()
        this._Scene = this._Main.scene
        this._Sizes = this._Main.Sizes

        this._Camera = this._Main.camera
        this._CSS = this._Main._css_renderer
        this._environment = new Environment()
        
        this._resources = new Resources(assets)


        // this.addObj()
        this.addObj2()

        this._resources.on("loaded", () => this.load())
    }

    load(){
        this._resources._items.forEach((mesh) => {
            // this._Scene.add(mesh)
            mesh.scene.scale.set(20,20,20)
            this._Scene.add(mesh.scene)
        })
        this._Loaded = true
    }

    addObj(){
        const geo = new THREE.BoxGeometry(200,200,200)
        const mat = new THREE.MeshBasicMaterial({color: "#ffffff"})
        this._obj1 = new THREE.Mesh(geo,mat)
        this._Scene.add(this._obj1)
    }

    addObj2(){
        const test = document.querySelector("#test") as HTMLElement
        if(!test) return
        this._obj2 = new CSS3.CSS3DObject(test)
        this._Scene.add(this._obj2)
        this._obj2.position.z = 100
    }
}