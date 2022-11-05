export const TRANSLATE = 'TRANSLATE';


export function switchLanguage(){
    
    return async function(dispatch) {
        return dispatch({
            type: TRANSLATE,
        })
    }
}
