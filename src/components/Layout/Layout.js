import React from 'react';
import CustomAux from '../../hoc/CustomAux';
import classes from './Layout.css'

const layout = ( props ) => (
    <CustomAux>
        <div>
            Toolbar. Sidedrawer, Backdrop
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </CustomAux>
);

export default layout;