import React, {Component} from 'react';
import CustomAux from '../../hoc/CustomAux';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    render (){
        return(
        <CustomAux>
            <Burger/>
            <div>Build Controls</div>
        </CustomAux>

        );
    }
}

export default BurgerBuilder;