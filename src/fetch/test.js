import 'whatwg-fetch'
import 'es6-promise'
import { getApi } from './get'
import { postApi } from './post'
import getStr from './textjs'
import {getStr1,getStr2} from './texjsjs'
console.log(getStr(123))
console.log(getStr1(456),getStr2(789))
export function getData(){
    var url = '/api/ads'
    var result = getApi(url)
    result.then(res=>{
        console.log(res.text())
    }).then(text=>{
        //console.log(text)
    })
}

export function postData(){
    var url = '/api/post'
    var data = {a:1,b:2}
    var result = postApi(url,data)
    result.then(res=>{
        console.log(res.text())
    }).then(text=>{
       // console.log(text)
    })

}