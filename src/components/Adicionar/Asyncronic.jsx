import axios from "axios";
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

export default function Asynchronous() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;
console.log(open && options.length === 0);
    React.useEffect(() => {
        let active = true;

        // if (!loading) {
        //     return undefined;
        // }

            let local="http://tienda-api.localhost/api/categorias";

            axios.get(local).then(response => {
                const categorias=response.data;
                //
                console.log((response.data))
                console.log(categorias);
                setOptions(categorias.map((categoria) => categoria.nombre));
                if (active) {
                    setOptions(categorias.map((categoria) => categoria.nombre));
                }
            })



        // (async () => {
        //     const response = await fetch('http://localhost:84/api/categorias');
        //     // await sleep(1e3); // For demo purposes.
        //     const countries = await response.json();
        //
        //     if (active) {
        //         setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
        //     }
        // })();

        return () => {
            active = false;
        };
    }, [loading]);

    // React.useEffect(() => {
    //     if (!open) {
    //         setOptions([]);
    //     }
    // }, [open]);

    return (
        <Autocomplete
            id="asynchronous-demo"
            style={{ width: 300 }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            getOptionSelected={(option, value) => option.name === value.name}
            getOptionLabel={(option) => option.name}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Asynchronous"
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}