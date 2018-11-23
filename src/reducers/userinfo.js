import * as actionType from '../constants/userinfo'

const initallState = {}

export default function currentCity (state=initallState,action){
    switch(action.type){
        case actionType.UPDATE_CITY:
            return action.data   
        
        default:
            return state
    }
}