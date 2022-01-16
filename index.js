let OutputScreen = document.getElementById("outputS");
var buttons = document.querySelectorAll("button");
var value = '';
for(var elements of buttons){
    elements.addEventListener("click" , (e)=>{
     var buttonTxt = e.target.innerText;

       if(buttonTxt=='Cl'){
           value = '';
           OutputScreen.value = value;
       }
       else if(buttonTxt=='DEL'){
           OutputScreen.value = OutputScreen.value.slice(0,-1);
       }
       else if(buttonTxt=='='){
            OutputScreen.value = eval(value);
       }
       else {
           value = value + buttonTxt;
           OutputScreen.value = value;
       }
          
    } )
}