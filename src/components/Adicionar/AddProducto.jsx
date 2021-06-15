import React,{useEffect} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import axios from "axios"
import Button from "@material-ui/core/Button";

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function CustomizedSelects() {
    const classes = useStyles();
    const [categoria, setCategoria] = React.useState('');
    const [categorias, setCategorias] = React.useState([]);
    const handleChange = (event) => {
        setCategoria(event.target.value);
    };
    useEffect(() => {
        var local="http://tienda-api.localhost/api/categorias";

        axios.get(local).then(response => {
            setCategorias((response.data));
            //
            console.log((response.data))
        })
        console.log(categorias);
    }, []);
    return (
        <div>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="demo-customized-textbox">Categoria</InputLabel>
                <BootstrapInput id="demo-customized-textbox" />
            </FormControl>
            {/*<FormControl className={classes.margin}>*/}
                {/*<InputLabel id="demo-customized-select-label">Age</InputLabel>*/}
                {/*<Select*/}
                    {/*labelId="demo-customized-select-label"*/}
                    {/*id="demo-customized-select"*/}
                    {/*value={age}*/}
                    {/*onChange={handleChange}*/}
                    {/*input={<BootstrapInput />}*/}
                {/*>*/}
                    {/*<MenuItem value="">*/}
                        {/*<em>None</em>*/}
                    {/*</MenuItem>*/}
                    {/*<MenuItem value={10}>Ten</MenuItem>*/}
                    {/*<MenuItem value={20}>Twenty</MenuItem>*/}
                    {/*<MenuItem value={30}>Thirty</MenuItem>*/}
                {/*</Select>*/}
            {/*</FormControl>*/}
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="demo-customized-select-native">Categoria</InputLabel>
                <NativeSelect
                    id="demo-customized-select-native"
                    value={categoria}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    <option aria-label="None" value="" />
                    {categorias.map((categor)=>{
                        console.log(categor.nombre);
                        return(
                            <option value={categor.nombre}>{categor.nombre}</option>
                        )
                    })}

                </NativeSelect>
            </FormControl>
            <FormControl className={classes.margin}>
                <InputLabel id="demo-customized-select-label">Age</InputLabel>
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={categoria}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    <MenuItem value="">
                        {/*<em>None</em>*/}
                        <Button>
                            adicionar
                        </Button>
                    </MenuItem>
                    {categorias.map((categor)=>{
                        return(
                            <MenuItem value={categor.nombre}>{categor.nombre}</MenuItem>
                        )
                    })}


                </Select>
            </FormControl>
        </div>
    );
}
