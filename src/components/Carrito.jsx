import React, {useContext, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton'
import {CarritoContext} from './ejemplos/FullWidthTabs'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            marginBottom: theme.spacing(1),
        },
        '& .MuiBadge-root': {
            marginRight: theme.spacing(1),
        },
    },
}));
const Carrito = (props) => {
    const classes = useStyles();
    const [count, setCount] = React.useState(0);
    const {carrito,setCarrito} = useContext(CarritoContext);
    var producto=props.producto;
    useEffect(()=>{
        (carrito).map((prod) => {
            if (producto.id === prod.id) {
                setCount(prod.cantidad);
                console.log("robe");
            }
        });
    },[count]);


    const [deshabilitado, setDeshabilitado] = React.useState(true);
    const [invisible, setInvisible] = React.useState(false);

    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    };
    const habilitar = () => {
        count <= 1 ? setDeshabilitado(true) : setDeshabilitado(false)
        // if (count<=1)
        //     setDeshabilitado(true)
        // else setDeshabilitado(false)
    }
    // const carritoContext = CarritoContext;
    const addProd = (producto) => {
        let car = carrito;
        let existe = false;
        car.map((productoArr) => {
            if (productoArr.id === producto.id) {
                existe = true;
                productoArr.cantidad++;
            }
        });
        if (!existe) {
            let prod = {"id": producto.id, "nombre": producto.name, "descripcion": producto.descripcion, "cantidad": 1,"precio": producto.precio,"image": producto.image};
            car.push(prod);
        }
        setCarrito(car);
        console.log(carrito);
    };
    const removeProd = (producto) => {
        let car = carrito;
        car.map((productoArr, i) => {
            if (productoArr.id === producto.id) {
                if (productoArr.cantidad >= 2) {
                    productoArr.cantidad--;
                } else {
                    car.splice(i, 1);
                }
            }
        });
        setCarrito(car);
        console.log(carrito);
        console.log(car);
    };



    return (
        <div className={classes.root}>
            <div>
                {count > 0 ? (
                    <React.Fragment>
                        <ButtonGroup>
                            <Button
                                disabled={deshabilitado}
                                aria-label="reduce"
                                onClick={() => {
                                    setCount(Math.max(count - 1, 0));
                                    habilitar();
                                    removeProd(producto);
                                }}

                            >
                                <RemoveIcon fontSize="small"/>
                            </Button>
                        </ButtonGroup>
                        <IconButton onClick={() => {
                            setCount(count + 1);
                            setDeshabilitado(false);
                            addProd(producto);
                            console.log(carrito);
                        }}>
                            <Badge color="secondary" badgeContent={count}>

                                <ShoppingCartIcon/>

                            </Badge>
                        </IconButton>
                        {/*<ButtonGroup>*/}
                        {/*    <Button*/}
                        {/*        aria-label="increase"*/}
                        {/*        onClick={() => {*/}
                        {/*            setCount(count + 1);*/}
                        {/*            habilitar()*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        <AddIcon fontSize="small"/>*/}
                        {/*    </Button>*/}
                        {/*</ButtonGroup>*/}
                    </React.Fragment>
                ) : (
                    <IconButton onClick={() => {
                        setCount(count + 1);
                        setDeshabilitado(false);
                        addProd(producto);
                        console.log(carrito);

                        // carritoContext.puch(props.nombre);
                        // console.log(carritoContext);
                    }}>
                        <Badge color="secondary" badgeContent={count}>

                            <ShoppingCartIcon/>

                        </Badge>
                    </IconButton>
                )}

            </div>
        </div>
    );
}
export default Carrito



