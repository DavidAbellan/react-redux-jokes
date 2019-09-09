let initialState = { jokes : [ ] };

function joke (state = initialState, action) {
    switch (action.type) {
        case 'GETJOKE' : return {...state,
             jokes :[...state.jokes, {jokes: action.joke}]
             } ;
        default : return state;
    }
}
export default joke;
/**/