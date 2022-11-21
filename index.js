let btn_content = document.querySelector(".btn_content");
let result = document.querySelector(".result");
let operation = document.querySelector(".operation");
let target;

btn_content.addEventListener("click",(event)=>{
 
    if(!event.target.classList.contains("btn")) return;
    target = event.target.innerText;
     console.log(target);

     switch(target){
         case "C":
               operation.innerText = "";
               result.innerText = "";
             break;
        case "%":
            if(result.innerText == "") result.innerText = "";
             else result.innerText = eval(result.innerText)/100;
            break;
        case "⇐":  
                result.innerText = result.innerText.substring(0,result.innerText.length-1);
               if(result.innerText == "" && !operation.innerText == ""){
                  result.innerText = operation.innerText;
                  operation.innerText = "";
                 
               }
               
            break; 
        case "÷":  
              if(result.innerText == "") result.innerText = "";
                else result.innerText += "/";
                break;

        case "×":  
              if(result.innerText == "") result.innerText = "";
              else result.innerText +="*";
            
            break;  
        case "-":
             if(result.innerText == "") result.innerText = "";
             else result.innerText += target;
            break;
        case "+":
             if(result.innerText == "") result.innerText = "";
             else result.innerText += target;
            break; 
        case ".":
             if(result.innerText == "") result.innerText = "";
             else result.innerText += target;
            break; 
        case "=":
            // result.style.fontSize = "2em";
            // result.style. fontWeight = "bold";
            operation.innerText = result.innerText
            result.innerText = eval(result.innerText).toFixed(3);
            break;       
             default:
                result.innerText += target;
        }
    
    
   

});