import * as React from "react";
import * as ReactDOM from "react-dom";

import { GeocapApp } from "./components/GeocapApp";

ReactDOM.render(

    <GeocapApp companyName="Geocap" appName="Geocap Subsurface Server" version="1.5" />,

    document.getElementById("root")
);

