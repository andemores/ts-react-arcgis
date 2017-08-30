
import * as esriLoader from 'esri-loader';

import * as React from "react";


export interface Esri2DMapProps { containerId: string }


 function createMap(mapContainerId : string) {
    console.log("Creating map at " + mapContainerId);



    esriLoader.dojoRequire([
        "esri/Map",
        "esri/views/MapView",
        "dojo/domReady!"
    ], function (Map: any, MapView: any) {
        console.log("Create map 1");
        var map = new Map({
            basemap: "streets"
        });
        var view = new MapView({
            container: mapContainerId,  // Reference to the scene div created in step 5
            map: map,  // Reference to the map object created before the scene
            zoom: 4,  // Sets zoom level based on level of detail (LOD)
            center: [15, 65]  // Sets center point of view using longitude,latitude
        });

        console.log("Create map 2");
    });
}


// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Esri2DMap extends React.Component<Esri2DMapProps, undefined> {
    render() {
        return <div ></div>;
    }

    // add types in arrow functions
    componentWillMount() {
        console.log("Map Will Mounted");

        let mapElmId = this.props.containerId;


        // preload the ArcGIS API
        esriLoader.bootstrap((err: any) => {
            if (err) {
                // handle any loading errors
                console.error(err);
            } else {
                // optionall execute any code once it's preloaded
                createMap( mapElmId);
            }
        }, {
                // use a specific version instead of latest 4.x
                url: 'https://js.arcgis.com/4.4/'
            });

    }
}