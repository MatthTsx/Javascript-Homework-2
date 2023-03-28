import Main3D from "./Main3D"
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

export default class Camera{

    Main
    Sizes
    scene
    camera: THREE.PerspectiveCamera | null = null
    canvas
    orb: OrbitControls | undefined

    constructor(){
        
        this.Main = new Main3D()
        this.Sizes = this.Main.Sizes
        this.scene = this.Main.scene
        this.canvas = this.Main.canvas
        
        this.setCamera()
        this.orbit()
    }

    orbit(){
        if(!this.camera || !this.canvas) return
        this.orb = new OrbitControls(this.camera, this.canvas)
        // this.orbit.enableDamping = true
        this.orb.enableZoom =true
    }

    setCamera(){
        this.camera = new THREE.PerspectiveCamera(
            30,
            this.Sizes?.AspectRatio,
            1,
            10000
        )
        this.scene?.add(this.camera)
        this.camera.position.z = 500
    }

    resize(){
        if(!this.camera || !this.Sizes) return
        this.camera.aspect = this.Sizes?.AspectRatio as number
        this.camera.updateProjectionMatrix()
    }

}