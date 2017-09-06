import * as THREE from 'three';
// Typescript spesific import syntax since Detector seems to use module.exports
//import Detector = require ("../threeJS/Detector")

import * as Detector from "../threeJS/Detector";


import * as React from "react";


export interface ShaderTestProps { }



// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class ShaderTest extends React.Component<ShaderTestProps, undefined> {
    private scene: THREE.Scene;
    private camera: THREE.Camera;
    private renderer: THREE.Renderer;

    elmId : string;

    //container: HTMLElement;

    uniforms: any;    

    static idCounter : number = 0 ;

    //static counter : number = 0;
    constructor (props : ShaderTestProps) {
        super (props);

        // Make uniquie id
        this.elmId = "shaderTestElement" + ShaderTest.idCounter++;

        if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
        
    }


    render() {
        return <div id={this.elmId}></div>
    }

    // add types in arrow functions
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
        let container = document.getElementById( this.elmId);
        this.camera = new THREE.Camera();
        this.camera.position.z = 1;
        this.scene = new THREE.Scene();
        var geometry = new THREE.PlaneBufferGeometry( 2, 2 );
        this.uniforms = {
            time:       { value: 1.0 },
            resolution: { value: new THREE.Vector2() }
        };
        var material = new THREE.ShaderMaterial( {
            uniforms: this.uniforms,
            vertexShader: this.vertexShader(),
            fragmentShader: this.fragmentShader()
        } );
        var mesh = new THREE.Mesh( geometry, material );
        this.scene.add( mesh );
        this.renderer = new THREE.WebGLRenderer();
        //this.renderer.setPixelRatio( window.devicePixelRatio );

        container.appendChild( this.renderer.domElement );
        //stats = new Stats();
        //container.appendChild( stats.dom );
        this.onWindowResize(null);
        window.addEventListener( 'resize', this.onWindowResize.bind (this), false );
    }

     onWindowResize( event : any ) {
         console.log("window resize");
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.uniforms.resolution.value.x = this.renderer.domElement.width;
        this.uniforms.resolution.value.y = this.renderer.domElement.height;
    }
  
  
     renderThree() {
        this.uniforms.time.value += 0.05;
        this.renderer.render( this.scene, this.camera );
    }

    vertexShader() {
        return `void main()	{
            gl_Position = vec4( position, 1.0 );
        } `
    
    }

    fragmentShader() {
        return `
        uniform vec2 resolution;
        uniform float time;
        void main()	{
            vec2 p = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;
            float a = time*40.0;
            float d,e,f,g=1.0/40.0,h,i,r,q;
            e=400.0*(p.x*0.5+0.5);
            f=400.0*(p.y*0.5+0.5);
            i=200.0+sin(e*g+a/150.0)*20.0;
            d=200.0+cos(f*g/2.0)*18.0+cos(e*g)*7.0;
            r=sqrt(pow(abs(i-e),2.0)+pow(abs(d-f),2.0));
            q=f/r;
            e=(r*cos(q))-a/2.0;f=(r*sin(q))-a/2.0;
            d=sin(e*g)*176.0+sin(e*g)*164.0+r;
            h=((f+d)+a/2.0)*g;
            i=cos(h+r*p.x/1.3)*(e+e+a)+cos(q*g*6.0)*(r+h/3.0);
            h=sin(f*g)*144.0-sin(e*g)*212.0*p.x;
            h=(h+(f-e)*q+sin(r-(a+h)/7.0)*10.0+i/4.0)*g;
            i+=cos(h*2.3*sin(a/350.0-q))*184.0*sin(q-(r*4.3+a/12.0)*g)+tan(r*g+h)*184.0*cos(r*g+h);
            i=mod(i/5.6,256.0)/64.0;
            if(i<0.0) i+=4.0;
            if(i>=2.0) i=4.0-i;
            d=r/350.0;
            d+=sin(d*d*8.0)*0.52;
            f=(sin(a*g)+1.0)/2.0;
            gl_FragColor=vec4(vec3(f*i/1.6,i/2.0+d/13.0,i)*d*p.x+vec3(i/1.3+d/8.0,i/2.0+d/18.0,i)*d*(1.0-p.x),1.0);
        }    
        `
    
    }
        
        

}