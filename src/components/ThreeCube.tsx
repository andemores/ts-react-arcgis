import * as THREE from 'three';

const scene = new THREE.Scene();

import * as React from "react";



export interface ThreeCubeProps {  color : string}





// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class ThreeCube extends React.Component<ThreeCubeProps, undefined> {
    scene : THREE.Scene;
    camera : THREE.Camera;
    renderer : THREE.Renderer;
    cube : THREE.Mesh;

    //static counter : number = 0;

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
        //var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        let cubeColor  =  this.props.color ;

        var material = new THREE.MeshBasicMaterial( { color: cubeColor } );
        this.cube = new THREE.Mesh( geometry, material );
        this.scene.add( this.cube );
        
        this.camera.position.z = 5;        

                
        document.getElementById ("threeScene").appendChild( this.renderer.domElement );        

        var c = this.cube;
        var r = this.renderer;
        var scene_ = this.scene;
        var camera_ = this.camera;

        var animate = function () {
            requestAnimationFrame( animate );

            c.rotation.x += 0.1;
            c.rotation.y += 0.1;

            r.render(scene_, camera_);
        };

        animate();

    }

    
        
}