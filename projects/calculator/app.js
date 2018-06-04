var input ="";
var expression=[];
var log="";

$("button").click(function(){
  var val = $(this).attr("value");

// DECIMAL POINT  
  
  if (val==="."){
      input+=val;
      log+=val;
      $("#result").html(val);
      $("#history").html(log);
  }
  
  
// NUMERICAL BUTTONS  
  if (val.match('[0-9]')){
      input+=val;
      log+=val;
      $("#result").html(input);
      $("#history").html(log);
    }

  
// OPERATOR BUTTONS  
   if (val.match('[+]')||val.match('[*]')||val.match('[-]')||val.match('[/]')){
      if(input!=""){
            expression.push(input);
            log+=val;
            if(log.length>25){
              log="";
              $("#history").html("");
            }
            else {
              $("#history").html(log);
            }
            expression.push(val);
            $("#result").html(val);
            input="";     
      } 
 }
  
  
// ALL CLEAR BUTTON
    if(val==='ac'){
       expression=[];
       input="";
       log=""; 
       $("#result").html("");
       $("#history").html("");
     }
  
 //CLEAR ENTRY BUTTON

     if(val === 'ce'){
       input="";
       $("#result").html(0);
       
     }
  
// EQUALS BUTTON
    if (val.match('[=]')){
       
       expression.push(input);
       console.log(expression);      
       var mathExp = expression.join(" ");
       var total = eval(mathExp);
       var totalStr = total.toString();       
       log+=val+total;
       if (totalStr.length>15){
         $("#result").html(0);
         $("#history").html("exceeds digit limit");
         log="";
         totalStr="";
         expression=[];
         input="";
       }   
       else {
         $("#result").html(totalStr);
        
         if(log.length>25){
           $("#history").html(totalStr);
           log=totalStr;
         }
         else {
            $("#history").html(log);        
         } 
         expression=[];
         input=totalStr; 
       }      
    }
});