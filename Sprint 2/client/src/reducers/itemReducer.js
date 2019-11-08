import {GET_ITEMS} from '../actions/types';

const initialState = {
    items: [
        {"_id":"5dbb7a111c9d4400007f2c4c","name":"madrid","country":"spain"},
        {"_id":"5dbb7d351c9d4400007f2c4e","name":"london","country":"uk"},
        {"_id":"5dbb7d4c1c9d4400007f2c50","name":"berlin","country":"germany"},
        {"_id":"5dbb7d5b1c9d4400007f2c52","name":"rome","country":"italy"},
        {"_id":"5dbb7d6f1c9d4400007f2c54","name":"paris","country":"france"},
        {"_id":"5dbb7d801c9d4400007f2c56","name":"bucharest","country":"romania"},
        {"_id":"5dbb7e111c9d4400007f2c58","name":"budapest","country":"hungary"},
        {"_id":"5dbb7e241c9d4400007f2c5a","name":"hamburg","country":"germany"},
        {"_id":"5dbb7e3e1c9d4400007f2c5c","name":"warsaw","country":"poland"},
        {"_id":"5dbb7e701c9d4400002354cb","name":"belgrade","country":"serbia"},
        {"_id":"5dbb7e7e1c9d4400002354cd","name":"vienna","country":"austria"},
        {"_id":"5dbb7ee11c9d4400002354cf","name":"milan","country":"italy"},
        {"_id":"5dbb7ef01c9d4400002354d0","name":"munich","country":"germany"},
        {"_id":"5dbb7efb1c9d4400002354d1","name":"prague","country":"czech republic"},
        {"_id":"5dbb805d1c9d4400002354d2","name":"sofia","country":"bulgaria"},
        {"_id":"5dbb806b1c9d4400002354d3","name":"napoli","country":"italy"},
        {"_id":"5dbb80781c9d4400002354d5","name":"stockholm","country":"sweden"},
        {"_id":"5dbb80841c9d4400002354d6","name":"helsinki","country":"finland"},
        {"_id":"5dbb80901c9d4400002354d8","name":"copenhagen","country":"denmark"},
        {"_id":"5dbb809b1c9d4400002354da","name":"oslo","country":"norway"}
    ]
};

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        default: 
            return state;
    }
};