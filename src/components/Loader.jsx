import React from "react";
import {CircularProgress} from "@material-ui/core";

function Loader({loading, posts}) {
    if (loading === true) {
        return (
            <center style={{marginTop: "50px"}}>
                <CircularProgress size={80} thickness={5}/>
            </center>
        );
    } else {
        return (<div>{posts}</div>);
    }
}

export default Loader;