import React,{useEffect, useState} from 'react'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const Compra = (props)=>{
    const [arr,setArr]=React.useState([])
    useEffect(() => {
        // if(props.carrito!=="undefined")
    //    setArr(props.carrito);
    props.setCarrito(props.carrito);
       console.log(props.carrito)
    },[])
    return(
        <List>
            <ListItem>
                <ListItemText primary={"Producto"}/>
                <ListItemText secondary={"Subtotal"} />
                <ListItemText secondary={"Total"}/>
                <Typography variant={"body2"}>100</Typography>
            </ListItem>
            {arr.map((producto) => {
                <ListItem>
                <ListItemText primary={producto.nombreProducto} secondary={producto.descripcion}/>
                {/* <ListItemText secondary={50} /> */}
                <ListItemText secondary={100}/>
                <Typography variant={"body2"}>100</Typography>
            </ListItem>
            })}
            <ListItem>
                <ListItemText primary={"Producto1"} secondary={"este es el producto 1 asdasdasdas nlkjnkjljnljnlj lnljnljnlasd ljansdlnadad asndla"}/>
                {/* <ListItemText secondary={50} /> */}
                <ListItemText secondary={100}/>
                <Typography variant={"body2"}>100</Typography>
            </ListItem>
        </List>
    )
}
export default Compra