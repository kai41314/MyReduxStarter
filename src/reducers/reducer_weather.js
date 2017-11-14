import FETCH_WEATHER from '../actions/index'

export default function(state = [], action){
    console.log('Action', action);
    
    switch(action.type){
        case FETCH_WEATHER: 
        //return [action.payload.data];
        //return state.contact([action.payload.data]);
        return [action.payload.data, ...state]; //=> [city, city, city]
    }

    return state;
}