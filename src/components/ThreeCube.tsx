//import THREE = require ('three');
import * as  THREE from 'three';

import { OrbitControls} from "../threeJS/OrbitControls"



import * as React from "react";



export interface ThreeCubeProps { color: string }




// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class ThreeCube extends React.Component<ThreeCubeProps, undefined> {
    scene: THREE.Scene;
    camera: THREE.Camera;
    renderer: THREE.Renderer;
    cube: THREE.Mesh;

    enableZoom : boolean;

    constructor(props: ThreeCubeProps) {
        super(props);

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        //this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        var geometry = new THREE.BoxGeometry(1, 1, 1);
        //var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        let cubeColor = this.props.color;

        var material = new THREE.MeshBasicMaterial({ color: cubeColor });
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);

        this.camera.position.z = 5;




    }


    render() {
        return <div id="threeScene"></div>
    }

    // add types in arrow functions
    componentDidMount() {
        document.getElementById("threeScene").appendChild(this.renderer.domElement);

        let  controls = new OrbitControls(this.camera, this.renderer.domElement);

        // How far you can orbit vertically, upper and lower limits. 
        controls.minPolarAngle = 0; 
        controls.maxPolarAngle  =  Math.PI;


        // How far you can dolly in and out ( PerspectiveCamera only ) 
        controls.minDistance = 0;
        controls.maxDistance =  Infinity;

        this.enableZoom = true; // Set to false to disable zooming 
        //    this.zoomSpeed = 1.0;


        controls.enablePan =  true; // Set to false to disable panning (ie vertical and horizontal translations) 

        var r = this.renderer;
        var scene_ = this.scene;
        var camera_ = this.camera;

        var animate = function () {
            requestAnimationFrame(animate);

            // c.rotation.x += 0.1;
            // c.rotation.y += 0.1;

            r.render(scene_, camera_);
        };

        animate();

    }



}

