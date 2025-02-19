
display=document.getElementById("displ");

function addtoresult(val){
    display.value+=val;
}

function removeall(){
    display.value="";
}
function result(){
    try{
        display.value=eval(display.value);
    }

    catch(error){
        display.value="Error";
    }
    
}

function addParentheses() {
    let openCount = (display.value.match(/\(/g) || []).length;
    let closeCount = (display.value.match(/\)/g) || []).length;
    
  
    if (openCount === closeCount || /[\+\-\*\/\(]$/.test(display.value)) {
      display.value += "(";
    } else if (openCount > closeCount) {
      
      display.value += ")";
    }
  }

  function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
  }

