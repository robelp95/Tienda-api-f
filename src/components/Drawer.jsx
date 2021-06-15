import React from 'react';
import clsx from 'clsx';
import {makeStyles, Drawer, Divider} from '@material-ui/core';
import Listas from "./Listas";


const estilos = makeStyles(theme => ({

    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: 240,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: 240,
    },
    toolbar: theme.mixins.toolbar,
}));
const Cajon = (props) => {
    const classes = estilos()
    return (
        <Drawer
            className={classes.drawer}
            variant={props.variant}
            classes={{
                paper: classes.drawerPaper
            }}
            anchor='left'
            open={props.open}
            onClose={props.onClose ? props.onClose: null}
        >
            <div className={classes.toolbar}></div>
            <Divider/>
            <Listas/>
        </Drawer>
    )
}
export default Cajon


