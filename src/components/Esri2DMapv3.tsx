// ESRI map for ARcGIS JS v. 3
import * as esriLoader from 'esri-loader';

import * as React from "react";


export interface Esri2DMapProps { }


 function createMap(mapContainerId : string) {
    console.log("Creating map at " + mapContainerId);



    esriLoader.dojoRequire([
        "esri/map",
        "dojo/domReady!"
    ], function (Map: any) {
        let map = new Map(mapContainerId, {
            basemap: "topo",
            center: [-122.45, 37.75],
            zoom: 13
          });

        console.log("Create map");
    });
}


// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Esri2DMap extends React.Component<Esri2DMapProps, undefined> {
    render() {
        return <div  id="viewDiv" ></div>;
    }

    // add types in arrow functions
    componentWillMount() {
        console.log("Map Will Mounted");

        //let mapElmId = this.props.containerId;
        let mapElmId = "viewDiv";


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
                url: 'https://js.arcgis.com/3.22/'
            });

    }
}