import EventEmitter from 'events'
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { assets } from '~/utils/types'
import Main3D from '../Main3D'
import Loaders from './Loaders'

export default class Resources extends EventEmitter{

    _Main
    _assets: assets
    _items
    _queue
    _loaders

    constructor(assets: assets){
        super()

        this._Main = new Main3D()
        
        this._assets = assets
        this._queue = this._assets.length
        this._items = new Array(0)
        this._loaders = new Loaders()

        this.startLoading()
    }

    startLoading(){
        for(const asset of this._assets){
            if(asset.type == "glbModel"){
                this._loaders._glb.load(asset.path, (file) => {
                    this.loadedSingle(file)
                })
            }
        }
    }

    loadedSingle(file: GLTF){
        this._items.push(file)
        if(this._items.length >= this._queue){
            console.log("loaded")
            this.emit("loaded")
            return
        }
    }

}