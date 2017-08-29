

import * as React from "react";

import { Esri2DMap } from "./Esri2DMap";

export interface GeocapAppProps { compiler: string; framework: string; }



// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class GeocapApp extends React.Component<GeocapAppProps, undefined> {
    render() {
        return (<div>
            <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
            <Esri2DMap containerId="viewDiv"></Esri2DMap>
        </div>
        );
    }

    // add types in arrow functions
    componentDidMount() {
        console.log("App Mounted");
    }
}