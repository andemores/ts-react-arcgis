import * as React from "react";

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

import Dialog from 'material-ui/Dialog';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


import { yellow500, greenA200, red500, blue500 } from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';

import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

const iconStyles = {
    marginRight: 24,
};

import * as injectTapEventPlugin from 'react-tap-event-plugin';


export interface ToolbarProps { title: string }

const style1 = {
    marginRight: 20,
};

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();





export class GCToolbar extends React.Component<ToolbarProps, null> {
    public state: any;

    constructor(props: any) {
        super(props);
        this.state = {
            open : false,
            value: 3
        };


    }

    // Open Add Service dialog
    handleAddServiceOpen = () => {
        this.setState({ open: true });
    };

    // Close Service dialog
    handleAddServiceCancel = () => {
        this.setState({ open: false });
    };

    //  Submit add serice
    handleAddServiceSubmit = () => {
        this.setState({ open: false });
    };

    // Called when ad service closed by Esc or outside clicking
    handleAddServiceClose = () => {
        console.log("Dialog closed");
        this.setState({ open: false });
    };

    handleAddUrlChange = (event: object, newValue: string) => {
        console.log("URL is " + newValue);

    }
    
    handleChange = (event: any, index: number, value: any) => this.setState({ value });

    render() {
        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleAddServiceCancel}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              keyboardFocused={true}
              onClick={this.handleAddServiceSubmit}
            />,
          ];

        return (

            <Toolbar >
                <Dialog
                    title="Add Service"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleAddServiceClose}
                >
                <TextField fullWidth= { true }  onChange = { this.handleAddUrlChange } hintText= "https://myserver.com/arcgis/rest/services/myservice/MapServer/0">
                    </TextField>
                    
        </Dialog>
                <FloatingActionButton mini={false} style={style1} onClick={ this.handleAddServiceOpen}>
                    <ContentAdd />
                </FloatingActionButton>
                <ToolbarTitle text={this.props.title} />
                <ToolbarGroup firstChild={true}>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={1} primaryText="All Broadcasts" />
                        <MenuItem value={2} primaryText="All Voice" />
                        <MenuItem value={3} primaryText="All Text" />
                        <MenuItem value={4} primaryText="Complete Voice" />
                        <MenuItem value={5} primaryText="Complete Text" />
                        <MenuItem value={6} primaryText="Active Voice" />
                        <MenuItem value={7} primaryText="Active Text" />
                    </DropDownMenu>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarTitle text="Options" />
                    <FontIcon className="material-icons" style={iconStyles}>home</FontIcon>
                    <ToolbarSeparator />
                    <RaisedButton label="Create Broadcast" primary={true} />
                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                <NavigationExpandMoreIcon />
                            </IconButton>
                        }
                    >
                        <MenuItem primaryText="Download" />
                        <MenuItem primaryText="More Info" />
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        );
    }


}
