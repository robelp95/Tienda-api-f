import React from 'react'

const useAddCarrito = (props)=>{
    const [carrito,setCarrito] = React.useState(props.carrito);
    function RemoveItem(){
        if(carrito.find(props.item))
    }
    return(
        
    )
}
export default useAddCarrito
