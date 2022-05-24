const task3Element = document.getElementById('task-3');
//let result;
function showalert(){
    alert("hello there");
}
function showParameterAlert(name){
    alert(name);
}
function brandNewFunction(string1,string2,string3){
    result = string1+string2+string3;
    return result;
}

showParameterAlert('hello my friend');
showalert();
task3Element.addEventListener('click',showalert)
const combinedString =brandNewFunction('ss','dd','fff');
alert(combinedString);
//alert(result);
