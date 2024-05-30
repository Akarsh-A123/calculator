//To get the value when button is pressed
function disp(num){
    result.value+=num
}
// to clear all the values
function clearall(){
    result.value=''
}
function del(){
    result.value=result.value.slice(0,result.value.length-1)
}
function equal(){
    try{
        result.value=eval(result.value)
    } catch{
        result.value='error'
        setTimeout(()=>{
            result.value=''
        },1000)
    }
}