import * as  THREE from 'three';

import "../threeJS/OrbitControls.js"



import * as React from "react";



export interface HelloProps {  }




function getName() : string {
    return "Geocap";
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    scene : THREE.Scene;
    camera : THREE.Camera;
    renderer : THREE.Renderer;
    cube : THREE.Mesh;

    render() {
        return <div id="threeScene"></div>
    }

    // add types in arrow functions
    componentDidMount() {
        console.log("Hello Mounted");
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        
        this. renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );

        
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this.cube = new THREE.Mesh( geometry, material );
        this.scene.add( this.cube );
        
        this.camera.position.z = 5;        

                
        document.getElementById ("threeScene").appendChild( this.renderer.domElement );        

        const controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        
       // How far you can orbit vertically, upper and lower limits. 
       controls.minPolarAngle = 0;
       controls.maxPolarAngle = Math.PI;
        
        
       // How far you can dolly in and out ( PerspectiveCamera only ) 
       controls.minDistance = 0;
       controls.maxDistance = Infinity;
        
    //    this.enableZoom = true; // Set to false to disable zooming 
    //    this.zoomSpeed = 1.0;
        
        
       controls.enablePan = true; // Set to false to disable panning (ie vertical and horizontal translations) 

        var c = this.cube;
        var r = this.renderer;
        var scene_ = this.scene;
        var camera_ = this.camera;

        var animate = function () {
            requestAnimationFrame( animate );

            // c.rotation.x += 0.1;
            // c.rotation.y += 0.1;

            r.render(scene_, camera_);
        };

        animate();

    }

    
        
}