import { gsap } from "gsap";
import Main3D from "../Main3D";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import World from "../world/World";

export default class _ScrollTrigger{

    _anim
    // _obj
    _Main
    _World

    constructor(){
        // gsap.registerPlugin(ScrollTrigger)
        // ScrollTrigger.defaults({
        //     immediateRender: false,
        //     scrub: true,
        // })

        this._Main = new Main3D()
        this._World = new World()
        // this._obj = this._World._obj1

        gsap.registerPlugin(ScrollTrigger)

        this._anim = gsap.timeline()

        // if(!this._obj) return

        // this._anim.to(this._obj.rotation, {
        //     scrollTrigger:{
        //         scrub: .2,
        //         trigger:".testt",
        //         start: "start center",
        //         end: "start 0px",
        //         markers: true
        //     },
        //     z:3.14,
        //     duration: 10,
        // })

        // this._anim.to(".testt", {
        //     x: 200,
        //     scrollTrigger:{
        //         trigger: ".testt",
        //         start: "top center",
        //         end: "top top",
        //         scrub: true,
        //         markers: true,
        //         pin: true
        //     },
        //     rotate: 180,
        //     backgroundColor: "#ffffff",
        //     duration: 10
        // })

        // this._anim.to("#test", {
        //     backgroundColor: "blue",
        //     duration: 1,
        //     scrollTrigger: {
        //         scrub: true,
        //         trigger: ".testt",
        //         start: "top center",
        //         end: "top 20%",
        //         markers: true
        //     }
        // })

        // if(!this._World._obj2) return
        // this._anim.to(this._World._obj2.position, {
        //     x: .1,
        //     duration: 5,
        //     scrollTrigger: {
        //         scrub: .75,
        //         trigger: ".testt",
        //         start: "top center",
        //         end: "top 20%",
        //         markers: true
        //     }
        // })
    }
}