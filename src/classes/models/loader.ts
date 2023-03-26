import EventEmitter from 'events';
import * as THREE from 'three'
import { Loaders } from '~/types/three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default class Resources extends EventEmitter{

    loaders: Loaders = {
        gltf : null
    }

    assets
    queue
    items: Array<any>
    loaded

    constructor(assets : Array<any>){
        super()

        this.assets = assets
        this.items = []
        this.queue = assets.length

        this.loaded = 0

        this.setLoaders()
        this.startLoading()
    }

    setLoaders(){
        this.loaders.gltf = new GLTFLoader()
    }

    startLoading(){
        for(const asset of this.assets){
            if(asset.type == "glbModel"){
                this.loaders.gltf?.load(asset.path, (file) => {
                    this.loadSingle(file)
                })
            }
        }
    }

    loadSingle(file: any){
        this.items[this.items.length] = file
        this.loaded++
        
        if(this.items.length >= this.queue){
            console.log("ready")
            this.emit("ready")
        }
    }
}