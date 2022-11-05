
import { TRANSLATE } from './Actions';

const initialState = { language: true};

function rootReducer(state = initialState, action){
    
    switch (action.type) {
        case TRANSLATE:
            
            if(state.language !== true) {
                return {...state, language: true}
            }  else return {...state, language: false};
        
        default:
            return state;
    }
}

export default rootReducer;