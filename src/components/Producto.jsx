import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Carrito from "./Carrito";
import imagen_a from "../imagenes/840_560.jpg";
import Contenido from "./Contenido";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});
const Producto = (props) => {
    const classes = useStyles();
    var producto=props.producto;
    console.log(producto);
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={producto.image}
                        title={producto.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {producto.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {producto.descripcion}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {producto.precio}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={"justifyContent"}>
                    <IconButton>
                        <Carrito
                           producto={producto}
                            
                        />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}
export default Producto