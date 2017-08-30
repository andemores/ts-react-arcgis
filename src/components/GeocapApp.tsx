

import * as React from "react";

import { Esri2DMap } from "./Esri2DMap";
import * as F from "./ToolBar";

// MUI
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

export interface GeocapAppProps { appName: string; companyName: string; }

const muiTheme = getMuiTheme({
    palette: {
      accent1Color: deepOrange500,
    },
  });

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class GeocapApp extends React.Component<GeocapAppProps, undefined> {
    render() {
        return (
            <MuiThemeProvider  muiTheme={muiTheme}>
                <div>
                    <RaisedButton label="Default"/>
                    <F.ToolbarExamplesSimple/>
                <p>{this.props.appName} by {this.props.companyName}</p>
                <Esri2DMap containerId="viewDiv"></Esri2DMap>
                </div>
            </MuiThemeProvider>

        );
    }

    // add types in arrow functions
    componentDidMount() {
        console.log("App Mounted");
    }
}