import * as THREE from 'three'
import * as CSS3 from 'three/examples/jsm/renderers/CSS3DRenderer'
import _ScrollTrigger from '../animations/Scroll'
import Main3D from '../Main3D'
import Environment from './envioment'

export default class World{
    

    _Main:any
    _CSS
    _Camera
    _Sizes
    _Scene
    _environment:any
    _Scene2


    constructor(){

        this._Main = new Main3D()
        this._Scene = this._Main.scene
        this._Sizes = this._Main.Sizes

        this._Camera = this._Main.camera
        this._CSS = this._Main._css_renderer
        this._environment = new Environment()
        this._Scene2 = new THREE.Scene()
    }
}