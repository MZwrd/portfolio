import { EventEmitter } from "events";

export default class Time extends EventEmitter {

    constructor () {
        super();
        this.start = Date.now();    // ミリ秒
        this.current = this.start;  // 現在
        this.elapsed = 0;           // 全体の経過時間
        this.delta = 16;            // フレーム毎の時間
        
        this.update();
    }
    
    update() {
        const currentTime = Date.now();
        this.delta = currentTime - this.current;
        this.current = currentTime;
        this.elapsed = this.current - this.start;

        this.emit("update");
        window.requestAnimationFrame(() => this.update());
    }

}
