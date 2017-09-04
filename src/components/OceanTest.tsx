// Official three npm package

import * as THREE from 'three';
import "../threeJS/OrbitControls.js"


import { Fido } from  "../threeJS/WaterShader";




import * as React from "react";



export interface OceanTestProps {  }




 

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class OceanTest extends React.Component<OceanTestProps, undefined> {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    cube: THREE.Mesh;
     sphere :  THREE.Mesh;
     water : any; 

    enableZoom : boolean;

    constructor(props: OceanTestProps) {
        super(props);



    


    }

    componentDidMount() {
        console.log("Shader Test Mounted ");

        this.init();

        var r = this.renderer;
        
        let t = this;

        var animate = function () {
            requestAnimationFrame(animate);
            t.renderThree();

           

        };

        animate();
        
    }

    

    init() {
        const parameters = {
            width: 2000,
            height: 2000,
            widthSegments: 250,
            heightSegments: 250,
            depth: 1500,
            param: 4,
            filterparam: 1
        };   

		let container = document.getElementById( 'oceanScene' );
        //
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( this.renderer.domElement );
        //
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2( 0xaabbbb, 0.0001 );
        //
        this.camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 0.5, 3000000 );
        this.camera.position.set( 2000, 750, 2000 );
        //
        let controls = new THREE.OrbitControls( this.camera, this.renderer.domElement );
        controls.enablePan = false;
        controls.minDistance = 1000.0;
        controls.maxDistance = 5000.0;
        controls.maxPolarAngle = Math.PI * 0.495;
        controls.target.set( 0, 500, 0 );
        controls.update();
        this.scene.add( new THREE.AmbientLight( 0x444444 ) );
        //
        var light = new THREE.DirectionalLight( 0xffffbb, 1 );
        light.position.set( - 1, 1, - 1 );
        this.scene.add( light );
        //
        let waterNormals = new THREE.TextureLoader().load( 'textures/waternormals.jpg' );
        waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
        let gg = new Fido();
        this.water = new gg.water( this.renderer, this.camera, this.scene, {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals: waterNormals,
            alpha: 	1.0,
            sunDirection: light.position.clone().normalize(),
            sunColor: 0xffffff,
            waterColor: 0x001e0f,
            distortionScale: 50.0,
            fog: this.scene.fog != undefined
        } );
        //this.water = this.water.water;

        var mirrorMesh = new THREE.Mesh(
            new THREE.PlaneBufferGeometry( parameters.width * 500, parameters.height * 500 ),
            this.water.material
        );
        mirrorMesh.add( this.water );
        mirrorMesh.rotation.x = - Math.PI * 0.5;
        this.scene.add( mirrorMesh );
        // skybox
        var cubeMap = new THREE.CubeTexture( [] );
        cubeMap.format = THREE.RGBFormat;
        var loader = new THREE.ImageLoader();
        loader.load( 'textures/skyboxsun25degtest.png', function ( image ) {
            var getSide = function ( x : number, y : number ) {
                var size = 1024;
                var canvas = document.createElement( 'canvas' );
                canvas.width = size;
                canvas.height = size;
                var context = canvas.getContext( '2d' );
                context.drawImage( image, - x * size, - y * size );
                return canvas;
            };
            cubeMap.images[ 0 ] = getSide( 2, 1 ); // px
            cubeMap.images[ 1 ] = getSide( 0, 1 ); // nx
            cubeMap.images[ 2 ] = getSide( 1, 0 ); // py
            cubeMap.images[ 3 ] = getSide( 1, 2 ); // ny
            cubeMap.images[ 4 ] = getSide( 1, 1 ); // pz
            cubeMap.images[ 5 ] = getSide( 3, 1 ); // nz
            cubeMap.needsUpdate = true;
        } );
        var cubeShader = THREE.ShaderLib[ 'cube' ];
        cubeShader.uniforms[ 'tCube' ].value = cubeMap;
        var skyBoxMaterial = new THREE.ShaderMaterial( {
            fragmentShader: cubeShader.fragmentShader,
            vertexShader: cubeShader.vertexShader,
            uniforms: cubeShader.uniforms,
            depthWrite: false,
            side: THREE.BackSide
        } );
        var skyBox = new THREE.Mesh(
            new THREE.BoxGeometry( 1000000, 1000000, 1000000 ),
            skyBoxMaterial
        );
        this.scene.add( skyBox );
        //
        var geometry = new THREE.IcosahedronGeometry( 400, 4 );
        for ( var i = 0, j = geometry.faces.length; i < j; i ++ ) {
            geometry.faces[ i ].color.setHex( Math.random() * 0xffffff );
        }
        var material = new THREE.MeshPhongMaterial( {
            vertexColors: THREE.FaceColors,
            shininess: 100,
            envMap: cubeMap
        } );
        this.sphere = new THREE.Mesh( geometry, material );
        this.scene.add( this.sphere );
        //
        // stats = new Stats();
        // container.appendChild( stats.dom );
        //
        window.addEventListener( 'resize', this.onWindowResize.bind ( this), false );
    }

    onWindowResize( event : any ) {
		this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );

   }
   


    render() {
        return <div id="oceanScene"></div>
    }


    renderThree() {
        var time = performance.now() * 0.001;
        this.sphere.position.y = Math.sin( time ) * 500 + 250;
        this.sphere.rotation.x = time * 0.5;
        this.sphere.rotation.z = time * 0.51;
        this.water.material.uniforms.time.value += 1.0 / 60.0;
        this.water.render();
        this.renderer.render( this.scene, this.camera );        
    }



}