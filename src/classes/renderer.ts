import Main3D from "./Main3D"
import * as THREE from 'three'

export default class Renderer{

    Main
    scene
    canvas
    renderer: THREE.WebGLRenderer | undefined
    sizes
    camera

    constructor(){
        this.Main = new Main3D()
        this.scene = this.Main.scene
        this.canvas = this.Main.canvas
        this.sizes = this.Main.Sizes
        this.camera = this.Main.camera

        this.setRenderer()
    }

    setRenderer(){
        if(!this.canvas || !this.sizes) return
        
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        })
        this.renderer.physicallyCorrectLights = true //luzinha q tem fisica
        this.renderer.outputEncoding = THREE.sRGBEncoding
        this.renderer.toneMapping = THREE.CineonToneMapping
        this.renderer.toneMappingExposure = 1.75
        this.renderer.shadowMap.enabled = true //sombras
        this.renderer.shadowMap.type = THREE.PCFShadowMap //tipo das sombras
        this.renderer.setSize(this.sizes?.width, this.sizes?.height)
        this.renderer.setPixelRatio(this.sizes.PixelRatio)

    }

    update(){
        if(!this.scene || !this.camera?.camera) return
        this.renderer?.render(this.scene, this.camera.camera)
    }

    resize(){
        if(!this.sizes) return
        this.renderer?.setSize(this.sizes?.width, this.sizes?.height)
        this.renderer?.setPixelRatio(this.sizes.PixelRatio)
    }

}