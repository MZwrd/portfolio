import * as THREE from 'three';
import Experience from '../Experience';
import Environment from './Environment';

import Emil from './Emil';

export default class World {

    constructor () {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;

        this.resources.on("ready", () => {
            this.emil = new Emil();
            this.environment = new Environment();
            console.log("Created Emil");
        });
        

    }

}