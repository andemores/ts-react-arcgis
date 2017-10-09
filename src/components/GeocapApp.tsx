

import * as React from "react";

import { Esri2DMap } from "./Esri2DMap";
import { ThreeCube } from "./ThreeCube";
import { ShaderTest } from "./ShaderTest";
import { OceanTest } from "./OceanTest";
import { GCToolbar}  from "./ToolBar";


import { GUIControls}  from "./GUIControls";


// MUI
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import { Tabs, Tab } from 'material-ui/Tabs';


import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { deepOrange500 } from 'material-ui/styles/colors';

import getMuiTheme from 'material-ui/styles/getMuiTheme';


import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'


// Default 
const defTheme = getMuiTheme(darkBaseTheme);


// GEnerated from 
// https://cimdalli.github.io/mui-theme-generator/
const getTheme = () => {
    let overwrites = {
      "palette": {
          "primary1Color": Colors.orange700,
          "primary2Color": Colors.deepOrange700,
          "accent1Color": Colors.blueA200,
          "accent2Color": Colors.lightBlueA400,
          "accent3Color": Colors.lightBlueA400 // Table headers
      }
  };
    return getMuiTheme( darkBaseTheme, overwrites);
  }

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
        let  muit =    getTheme();
        
        return (
            <MuiThemeProvider muiTheme={muit }>
                <div>
                    <GCToolbar title={ this.props.appName + " " + this.props.version} />
                    <Tabs  >
                        <Tab label="Map" >
                            <Esri2DMap ></Esri2DMap>
                        </Tab>
                        <Tab label="Cube" >
                                <ThreeCube color = "blue"></ThreeCube>
                        </Tab>
                        <Tab label="Shader" >
                            <div>
                            <ShaderTest></ShaderTest>
                            </div>
                        </Tab>
                        <Tab label="Ocean" >
                            <OceanTest></OceanTest>
                        </Tab>
                        <Tab label="GUI Controls" >
                            <GUIControls></GUIControls>
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