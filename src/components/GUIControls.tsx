//import THREE = require ('three');


import * as React from "react";

import Checkbox from 'material-ui/Checkbox';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import * as  Rx from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';




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

    guiOservable: Subject<any>;

    constructor(props: GUIControlProps) {
        super(props);

        this.state = {
            valueSingle: '3', //  iconMenu
            checked: false,
            muiTheme: defTheme,
            value: 1
        }


        // Create a subject that notifies selection events
        // Difference between obsrvable and subject here : http://javascript.tutorialhorizon.com/2017/03/23/rxjs-subject-vs-observable/
        this.guiOservable = new Rx.Subject();

        let guiSubscription = this.guiOservable.subscribe({
            next: (v) => {
                console.log("value single is " + JSON.stringify (v));
            }
        });

    }

    getObserverable  () {
        return this.guiOservable;
    }

    updateCheck() {
        this.setState((oldState: any) => {
            return {
                checked: !oldState.checked,
            };
        });
    }

    // IconMenu
    handleChangeSingle = (event: any, value: any) => {
        
        this.setState({
            valueSingle: value,
        });


        this.guiOservable.next ( { value : value});
    };

    handleChange(event: Event, index: number, value: any) {
        alert("OK Change");
        //this.setState({value});
    }


    render() {
        return (
            <div style={{ backgroundColor: this.state.muiTheme.palette.canvasColor }} >
                <Checkbox
                    label="Simple with controlled value v2"
                    checked={this.state.checked}
                    onCheck={this.updateCheck.bind(this)}
                />
                <DropDownMenu value={1} >
                    <MenuItem value={1} primaryText="Never" />
                    <MenuItem value={2} primaryText="Every Night" />
                    <MenuItem value={3} primaryText="Weeknights" />
                    <MenuItem value={4} primaryText="Weekends" />
                    <MenuItem value={5} primaryText="Weekly" />
                </DropDownMenu>


                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    onChange={this.handleChangeSingle}
                    anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                    targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                >
                    <MenuItem value="1" primaryText="Refresh" />
                    <MenuItem value="2" primaryText="Send feedback" />
                    <MenuItem value="3" primaryText="Settings" />
                    <MenuItem value="4" primaryText="Help Me" />
                    <MenuItem value="5" primaryText="Sign out" />
                </IconMenu>

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

