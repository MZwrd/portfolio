import EventEmitter from "events";
import Experience from "../Experience";

export default class Sizes extends EventEmitter {

    constructor () {
        super();
        this.experience = new Experience();
        this.width = this.experience.canvas.width;
        this.height = this.experience.canvas.height;
        this.aspect = this.width / this.height;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);
        
        window.addEventListener("resize", () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.aspect = this.width / this.height;  
            this.pixelRatio = Math.min(window.devicePixelRatio, 2);
            this.emit("resize");
        });
    }

}
