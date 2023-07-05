import * as THREE from "three";
import Experience from "./Experience";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class Camera {


    constructor () {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        
        // console.log(this.canvas);
        // console.log(this.sizes);
        // console.log(this.scene);
        // console.log(this.experience);

        this.createPerspectiveCamera();
        this.createOrthographicCamera(); 
        this.setOrbitControls();

    }

    createPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(

            35,                        // 視野角
            this.sizes.aspect,         // アスペクト比
            0.1,                       // near clipping plane
            1000                       // far clipping plane

        );
        this.scene.add(this.perspectiveCamera);
        this.perspectiveCamera.position.z = 5;
        this.perspectiveCamera.lookAt(new THREE.Vector3(0, 0, 0));
    }
    
    /* 正射影カメラ */
    createOrthographicCamera() {
        this.frustum = 5; // 錐台
        this.orthographicCamera = new THREE.OrthographicCamera(

            (-this.sizes.aspect * this.sizes.frustum) / 2,  // カメラ錐台の左平面
            (this.sizes.aspect * this.sizes.frustum) / 2,   // カメラ錐台の右面
            this.sizes.frustum / 2,                         // カメラ錐台の上面
            -this.sizes.frustum / 2,                        // カメラ錐台の底面
            -100,                                           // near clipping plane
            100                                             // far clipping plane

        );
        this.scene.add(this.orthographicCamera);
    }

    // 滑らかにカメラコントローラを制御する
    setOrbitControls() {
        this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.2;
        this.controls.enableZoom = true;
    }

    resize() {
        // Updating Perspective Camera on Resize
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();

        // Updating Orthographic Camera on Resize
        this.orthographicCamera.left =
            (-this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.right =
            (this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.top = this.sizes.frustrum / 2;
        this.orthographicCamera.bottom = -this.sizes.frustrum / 2;
        this.orthographicCamera.updateProjectionMatrix();
    }

    update() {
        this.controls.update();
    }
        
}