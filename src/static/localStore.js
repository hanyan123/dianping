export default {
    getItem:function (key){
        let value
        try {
            value = localStorage.getItem(key)
        } catch (ex){
            console.error('没有数据')
        } finally {
            return value
        }
    },
    setItem:function (key,value){
        try {
            value = localStorage.setItem(key,value)
        } catch (ex){
            console.error('没有数据')
        } finally {
            return value
        }
    }
}