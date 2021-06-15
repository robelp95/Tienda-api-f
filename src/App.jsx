import React from 'react';
import Button from '@material-ui/core/Button'
import Navbar from "./components/NavBar";
import Drawer from './components/Drawer';
import Listas from "./components/Listas";

import Contenedor from "./components/Contenedor";
// import {ThemeProvider} from '@material-ui/core/styles'
// import theme from '.te'

function App() {
    return (

        <div>
            {/*<Navbar className='classes.navBar' />*/}
            {/*/!*<Drawer/>*!/*/}
            {/*<Button color='secondary'>*/}
            {/*    roberss*/}
            {/*</Button>*/}
            {/*<Listas/>*/}

            <Contenedor/>
        </div>
    );
}

export default App;
