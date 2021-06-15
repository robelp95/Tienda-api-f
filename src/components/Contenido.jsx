import React, {useEffect,useContext} from 'react'
import {Box, Grid, Button, makeStyles} from '@material-ui/core'
import Producto from './Producto'
import imagen_a from '../imagenes/840_560.jpg'
import axios from 'axios'
import {Contexto} from './ejemplos/FullWidthTabs'

const useStyles = makeStyles({
    gridPading: {
        padding: 10,
    },
    media: {
        height: 140,
    },
});
const Contenido = (props) => {
    // const [arr, setArr] = React.useState(['casa','paeea','loppp']);
    // const [array, setArray] = React.useState([]);
    const classes = useStyles();
    const departamento = props.departamento;
    

    return (
        <div>
            <Grid container>

                {/*{console.log(departamento.Telefonos)}*/}
                {departamento.productos.map((producto, i) => {
                   


                    // noinspection BadExpressionStatementJS

                    return (
                        <Grid className={classes.gridPading} key={i} item xs={12} sm={6} md={4}>
                            <Producto producto={producto}/>
                        </Grid>
                    )



                })}

            </Grid>
            {/*<Button onClick={getProducto()}>robe</Button>*/}
        </div>
    )
}
export default Contenido