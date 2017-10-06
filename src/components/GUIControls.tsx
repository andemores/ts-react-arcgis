//import THREE = require ('three');


import * as React from "react";

import Checkbox from 'material-ui/Checkbox';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';


import muiThemeable from 'material-ui/styles/muiThemeable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

export interface GUIControlProps { }

const defTheme = getMuiTheme(darkBaseTheme);

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    },
};

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class GUIControls extends React.Component<GUIControlProps, undefined> {
    state: any;

    constructor(props: GUIControlProps) {
        super(props);

        this.state = {
            checked: false,
            muiTheme: defTheme
        }




    }

    updateCheck() {
        this.setState((oldState: any) => {
            return {
                checked: !oldState.checked,
            };
        });
    }


    render() {
        return (
            <div style={{ backgroundColor: this.state.muiTheme.palette.canvasColor }} >
                <Checkbox
                    label="Simple with controlled value"
                    checked={this.state.checked}
                    onCheck={this.updateCheck.bind(this)}
                />
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Status</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableRowColumn>1</TableRowColumn>
                            <TableRowColumn>John Smith</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>2</TableRowColumn>
                            <TableRowColumn>Randal White</TableRowColumn>
                            <TableRowColumn>Unemployed</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>3</TableRowColumn>
                            <TableRowColumn>Stephanie Sanders</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>)
    }

    // add types in arrow functions
    componentDidMount() {
    }



}

