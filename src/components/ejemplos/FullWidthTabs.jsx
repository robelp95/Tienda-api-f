import React, {createContext, useEffect} from 'react'
import AppBar from "@material-ui/core/AppBar/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel"
import SwipeableViews from 'react-swipeable-views';
import {useTheme, makeStyles} from "@material-ui/core";
import axios from "axios";
import Contenido from "../Contenido";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        // width:
    },
}));
export const CarritoContext = React.createContext();
const FullWidthTabs = (props)=>{
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [arr, setArr] = React.useState([]);
    const [array, setArray] = React.useState([]);
    

    useEffect(() => {
        var local="http://localhost:84/api/categorias";
        var api="http://127.0.0.1:84/Tienda-API/public/index.php/api/categorias";
        var apil="localhost:8000/api/categorias";
        axios.get(local).then(response => {
            setArray((response.data));
            //
            console.log((response.data))
        })
        // getProducto()
        // setArray({fruta:'pina'})
        console.log(array)
    }, [arr]);

    function a11yProps(index) {
        return {
            id: `full-width-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`,
        };
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    return(
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    // scrollButtons="auto"
                    aria-label="full width tabs example"

                >
                    {array.map((departamento,i)=>{
                        return(
                        <Tab label={departamento.nombre} />

                        )
                    })}


                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >

                {array.map((departamento,i)=>{
                    // {console.log(departamento.Telefonos)}
                    
                    return(
                    <TabPanel value={value} index={i} dir={theme.direction}>
                        <CarritoContext.Provider value={{carrito:props.carrito,setCarrito:props.setCarrito}}>
                        <Contenido
                            departamento={departamento}
                            
                        />
                        </CarritoContext.Provider>
                    </TabPanel>
                    )
                })}


            </SwipeableViews>
        </div>
    )
}
export default FullWidthTabs