import 'whatwg-fetch'
import 'es6-promise'

export function getApi(url){
    var result = fetch(url,{
        credentials:'include',
        headers:{
            headers:{
                'Accept':'application/json,text/plain,*/*'
            }
        }
    });
    return result
}

