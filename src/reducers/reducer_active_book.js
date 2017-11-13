// State argument is not application state, only the state this reducer is repsonsible for
// Only when action parameter exists, the method is called by actions

export default function (state = null, action){
    console.log(action.type);
    switch (action.type) {
        case 'BOOK_SELECTED':
        return action.payload
    }
    return state    
}