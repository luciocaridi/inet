import { GET_ITEMS} from './types';

export const SetItemsFetch = ()=>async (dispatch) =>{
    await fetch('http://localhost:5000/Cities/all')
    .then((resp)=>{ return resp.json()})
    .then((data)=>{console.log(data)
        dispatch({
            type: GET_ITEMS,
            payload: data
        });
    })
    .catch(err=>console.log(err))
};
