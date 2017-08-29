import * as esriLoader from 'esri-loader';


import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);


function createMap() {
    


  esriLoader.dojoRequire([
    "esri/Map",
    "esri/views/MapView",
    "dojo/domReady!"
  ], function(Map : any, MapView : any){
    console.log("Create map 1");
    var map = new Map({
      basemap: "streets"
    });
    var view = new MapView({
      container: "viewDiv",  // Reference to the scene div created in step 5
      map: map,  // Reference to the map object created before the scene
      zoom: 4,  // Sets zoom level based on level of detail (LOD)
      center: [15, 65]  // Sets center point of view using longitude,latitude
    });

    console.log("Create map 2");
  });  
}

// preload the ArcGIS API
esriLoader.bootstrap((err : any) => {
    if (err) {
      // handle any loading errors
      console.error(err);
    } else {
      // optionall execute any code once it's preloaded
      createMap();
    }
  }, {
    // use a specific version instead of latest 4.x
    url: 'https://js.arcgis.com/4.4/'
  });