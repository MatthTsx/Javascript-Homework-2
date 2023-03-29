import * as THREE from 'three'
import Main3D from '../Main3D'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

export default class Loaders{

    _Main
    _glb: GLTFLoader

    constructor(){
        this._Main = new Main3D()
        this._glb = new GLTFLoader()
    }

}