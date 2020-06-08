var buttons=document.getElementsByClassName("buttons");
var display=document.getElementById("display");
var operand1=0;
var operand2=null;
var operator=null;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
        var value=this.getAttribute("data-value");
        if (value=='AC') {
            display.innerText="";
            operand1=0;
            operand2=null;
            operator=null;
        }
        else if(value=='sign'){
            if(display.innerText.charAt(0)=='-'){
                display.innerText=display.innerText.substr(1);
            }
            else{
                display.innerText='-'+display.innerText;
            }

        }
        else if(value=='+'||value=='-'||value=='*'||value=='/'||value=='%'){
            if(display.innerText.charAt(0)!='+'&&!display.innerText.charAt(0)!='-'&&display.innerText.charAt(0)!='*'&&display.innerText.charAt(0)!='%'&&display.innerText.charAt(0)!='/')
                operand1=parseFloat(display.innerText);
            display.innerText=value;
            operator=value;
        }
        else if(value=='='){

            // if(display.innerText.charAt(innerText.length()-1)=='%')
            // {
            //     display.innerText="";
            //     operand1=0;
            //     operand2=null;
            //     operator=null;
            //     return;
            // }

            if(display.innerText==""){
                operand1=0;
                operator=null;
                operand2=null;
                return;
            }
            if(display.innerText=="Infinity"||display.innerText=="Error"){
                display.innerText="";
                operand1=0;
                operand2=null;
                operator=null;
                return;
            }

            if(operator==null){
                operand1=parseFloat(display.innerText);
                display.innerText=operand1;
                return;
            }
            if(display.innerText.charAt(0)=='+'||display.innerText.charAt(0)=='-'||display.innerText.charAt(0)=='*'||display.innerText.charAt(0)=='%'||display.innerText.charAt(0)=='/'){
                display.innerText="Error";
                operand1=0;
                operand2=null;
                operator=null;
            }
            operand2=parseFloat(display.innerText);

            if(operator=='%'){
                var ans=eval(operand1+"/"+operand2)*100;

                display.innerText=(ans)+"%";
                operand1=ans;
                operand2=null;
                operator=null;
                return;
            }
            var ans=eval(operand1+" "+operator+" "+operand2);

            display.innerText=ans;
            operand1=ans;
            operand2=null;
            operator=null;
        }
        else{
            
            if(display.innerText=="Infinity"||display.innerText=="Error"){
                display.innerText="";
                operand1=0;
                operand2=null;
                operator=null;
            }
            
            if(display.innerText.charAt(0)=='+'||display.innerText.charAt(0)=='-'||display.innerText.charAt(0)=='*'||display.innerText.charAt(0)=='%'||display.innerText.charAt(0)=='/'){
                display.innerText="";
            }
            display.innerText+=value;
        }
    });
}