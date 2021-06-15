import React from 'react'
import {Hidden, Typography} from "@material-ui/core";
import WithWidth from "@material-ui/core/WithWidth";

const Oculto = (props) => {
    return (
        <div>
            <Typography variant={"h6"}>
                Ancho:{props.width}
            </Typography>
            <Hidden>

            </Hidden>
        </div>
    )
}
export default WithWidth()(Oculto)