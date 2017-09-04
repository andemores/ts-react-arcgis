

import * as React from "react";

import { Esri2DMap } from "./Esri2DMap";
import { ThreeCube } from "./ThreeCube";
import { ShaderTest } from "./ShaderTest";
import * as  Geocap from "./ToolBar";


// MUI
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import { Tabs, Tab } from 'material-ui/Tabs';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { deepOrange500 } from 'material-ui/styles/colors';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

export interface GeocapAppProps { appName: string; companyName: string; version: string }



/////////////////////////////////
// const muiTheme = getMuiTheme({
//     palette: {
//       accent1Color: deepOrange500,
//     },
//   });
// <Esri2DMap containerId="viewDiv"></Esri2DMap>

// 'HelloProps' describes the shape of props.  
// State is never set so we use the 'undefined' type.
export class GeocapApp extends React.Component<GeocapAppProps, undefined> {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <Geocap.GCToolbar />
                    <p>{this.props.appName} {this.props.version} by {this.props.companyName}</p>
                    <Tabs  >
                        <Tab label="Map" >
                            <Esri2DMap ></Esri2DMap>
                        </Tab>
                        <Tab label="Cube" >
                            <div>
                                <ThreeCube color = "blue"></ThreeCube>
                            </div>
                        </Tab>
                        <Tab label="Shader" >
                            <div>
                            <ShaderTest></ShaderTest>
                                
                            </div>
                        </Tab>

                    </Tabs>

                </div>
            </MuiThemeProvider>

        );
    }

    // add types in arrow functions
    componentDidMount() {
        console.log("App Mounted");
    }
}