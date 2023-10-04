//function clear calculator screen
function clearScreen(){
    document.getElementById("result").value = "";
}

//function show value
function display(value){
    document.getElementById("result").value =+ value;
}

//function calculator result
function calculate(){
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;

}
