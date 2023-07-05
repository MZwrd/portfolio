import * as THREE from "three";
import Experience from "./Experience.js";
import Emil from "./World/Emil.js";

export default class Renderer {

    constructor () {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;
        // this.emil = this.resource.items.Emil;  
        // console.log(this.resources);

        this.setRenderer();
    }

    setRenderer() {
        /* RENDERER */
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        });
        
        this.renderer.setClearColor(0x000000, 0); // 透過
        this.renderer.useLegacyLights = true;
        // this.renderer.shadowMap.enabled = true;
        // this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        
        
        /* 色味調整 */
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.physicallyCorrectLights = true;

        // トーンマッピング
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.25;


        this.renderer.setSize(this.sizes.width, this.sizes.height);     // サイズを指定
        this.renderer.setPixelRatio(this.sizes.pixelRatio);             // アスペクト比を指定

        // document.body.appendChild( renderer.domElement );

        // const cube = new THREE.Mesh( geometry, material );
    }
    
    resize() {
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }

    update() {  
        this.renderer.render(this.scene, this.camera.perspectiveCamera);
    }
        
}


// import * as THREE from 'three';
// import Experience from "./Experience";
// import Emil from "./World/Emil";

// export default class Animation {

//     constructor () {
//         this.experience = new Experience();
//         this.emil = new Emil();
//         this.test = new THREE.Mesh( this.emil );

//         this.animate();
//     }

//     animate () {
//         requestAnimationFrame( this.animate );

//         this.test.rotation.x += .01;
//         this.test.rotation.y += .01;

//         this.experience.renderer.renderer.render( this.experience.scene, this.experience.camera );
//     }
// }