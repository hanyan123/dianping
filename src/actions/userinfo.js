import * as actionType from '../constants/userinfo'

// export function login (data){
//     return {
//         type:actionType.USERINFO_LOGIN,
//         data:data
//     }
// }

export function updateCity (data){
    return {
        type:actionType.UPDATE_CITY,
        data:data
    }
}