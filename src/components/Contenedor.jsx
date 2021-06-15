import React from 'react'
import {
    makeStyles, Hidden
} from '@material-ui/core'
import NavBar from './NavBar'
import Cajon from "./Drawer";
import FullWidthTabs from './ejemplos/FullWidthTabs'
import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";
import Contenido from "./Contenido";
import {DirectPayment} from 'pagseguro-react'
import Checkout from "./checkout/Checkout"
import Compra from "./ejemplos/Compra";
import AddProducto from "./Adicionar/AddProducto"
import Autocompletar from "./Adicionar/Autocompletar"
import Asyncronic from "./Adicionar/Asyncronic"

const estilos = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


const Contenedor = () => {
    const classes = estilos();
    const [abrir, setAbrir] = React.useState(false);
    const accionAbrir = () => {
        setAbrir(!abrir)
    };
    const [carrito, setCarrito] = React.useState([]);


    return (
        <div className={classes.root}>
            <NavBar accionAbrir={accionAbrir}/>
            {/*<NavBar accionAbrir={accionAbrir}/>*/}
            <Hidden xsDown>
                <Cajon
                    variant='permanent'
                    open={true}
                />
            </Hidden>
            <Hidden smUp>
                <Cajon
                    variant='temporary'
                    open={abrir}
                    onClose={accionAbrir}
                />
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                {/*<Contenido/>*/}
                {/*<CarritoContext.Provider value={carrito}>*/}
                {/*<FullWidthTabs*/}
                    {/*carrito={carrito}*/}
                    {/*setCarrito={setCarrito}*/}
                {/*/>*/}
                {/*</CarritoContext.Provider>*/}
                {/*<DirectPayment*/}
                {/*<Checkout carrito={carrito}/>*/}
                {/*<Compra carrito={carrito}*/}
                {/*setCarrito={setCarrito}*/}
                {/*/>*/}
                {/*<AddProducto></AddProducto>*/}
                <Autocompletar>

                </Autocompletar>
                {/*<Asyncronic></Asyncronic>*/}

            </div>
        </div>


    )
}
export default Contenedor