import 'whatwg-fetch'
import 'es6-promise'


function objToparams(obj){
    var result = "";
    var item;
    for (item in obj){
        result +='&'+item+'='+encodeURIComponent(obj[item])
    }
    if(result){
        result = result.slice(1)
    }

    return result
}

export function postApi(url,data){
    var result = fetch(url,{
        method:'POST',
        credentials:'include',
        headers:{
            'Accept':'application/json,text/plain,*/*',
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:objToparams(data)
    });
    //console.log(result)
    return result
}
