import * as THREE from 'three'
import Main3D from '../Main3D'

export default class Environment{

    _world
    _main
    _scene

    constructor(){
        this._main = new Main3D()
        this._scene = this._main.scene
        this._world = this._main.World

        this.addLight()
        // this.addSun()
    }

    addLight(){
        const light = new THREE.AmbientLight('#ffffff', 1)
        this._scene?.add(light)
    }

    addSun(){
        const sunLight = new THREE.DirectionalLight("#ba3918",3)
        sunLight.castShadow = true
        sunLight.shadow.camera.far = 20
        sunLight.shadow.mapSize.set(1024 * 2,1024 * 2)
        sunLight.shadow.normalBias = 0.05
        sunLight.position.set(1.5, 7, 3)

        this._scene?.add(sunLight)
    }
}