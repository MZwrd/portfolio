import * as THREE from 'three';
import Experience from '../Experience';


export default class Emil {

    constructor () {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.emil = this.resources.items.Emil;
        this.actualEmil = this.emil.scene;
        // console.log(this.emil);

        this.setModel();
    }


    setModel() {
        this.scene.add(this.actualEmil);
    }
}