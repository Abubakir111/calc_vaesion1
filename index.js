let calc = document.querySelector(".calc");
let btn_content = document.querySelector(".btn_content");
let b1 = document.querySelectorAll("#b1");
let daytime_mode = document.querySelector(".daytime_mode");
let result = document.querySelector(".result");
let operation = document.querySelector(".operation");
let night_mode = document.querySelector(".night_mode");
let target;
let close_history = document.querySelector(".close_history");
let history = document.querySelector(".history");
let operation_history = document.querySelector(".operation_history");
let clear_history_button = document.querySelector(".clear_history_button"); 
let li = document.querySelectorAll("li");
let mas =  [];

btn_content.addEventListener("click",(event)=>{
    if(!event.target.classList.contains("btn")) return;
    target = event.target.innerText;
    // console.log(target);

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
            operation.innerText = result.innerText;
            result.innerText = eval(result.innerText).toFixed(0);
            if(!operation.innerText == "" && !result.innerText == ""){
                mas.push(`<li>${operation.innerText} <br> = ${result.innerText}<div class = "hr"></div></li>`);
                for(let i = 0; i  < mas.length; i++){
                        console.log(mas[i]);
                        operation_history.innerHTML += mas[i];
                        mas =[];
                    
                }
              
            }
            break;
        case "↺":
            if(result.innerText == "") result.innerText = "";
                history.style.display = "block";
               break;       
             default:
                result.innerText += target;
        }

});
daytime_mode.addEventListener("click",()=>{
    changed_themes_to_day_mode("block","#FAFAFA","black","black","#E9F6FF","black" ,"none");
    history.style.background = "#fff";
    clear_history_button.style.background = "rgb(233, 246, 255)";
   
});

night_mode.addEventListener("click",()=>{
    changed_themes_to_night_mode("block","none","#00223A","#fff","#fff","rgb(0, 27, 47)","black");
    history.style.background = "rgb(0, 27, 47)";
    clear_history_button.style.background = "#28b2e7";

});

 function changed_themes_to_day_mode(display1,color1 , color2 , color3, color4,classs,display2 ){
   
    night_mode.style.display = display1;
    calc.style.background = color1;
    operation.style.color = color2;
    result.style.color = color3;
    btn_content.style.background = color4;
    for(let i = 0; i < b1.length; i++){
       console.log(b1[i].classList.add(classs));

      }
      daytime_mode.style.display = display2;
 }
 function changed_themes_to_night_mode(display1, display2,color1 , color2 ,color3,color4,classs){
   
    daytime_mode.style.display = display1;
    night_mode.style.display = display2;
    calc.style.background = color1;
    operation.style.color = color2;
    result.style.color = color3;
    btn_content.style.background = color4;
    for(let i = 0; i < b1.length; i++){
       b1[i].classList.remove(classs);
    }
 }
 close_history.addEventListener("click",()=>{ history.style.display = "none";});
clear_history_button.addEventListener("click",()=>{
   operation_history.innerHTML = "";
});