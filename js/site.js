//get values from the screen and display them
function getValues(){
   let inputMessage = document.getElementById("message").value;
   let alertMessage = document.getElementById("alertMessage");
   
   let reverseMessage = reverse(inputMessage);
   alertMessage.innerHTML = displayMessage(inputMessage, reverseMessage);
}

//return the message in reverse
function reverse(message){
      let reverseMessage = "";
      for(let index = message.length-1; index>=0; index--){
         reverseMessage += message[index]; 
      }

      return reverseMessage;
}

function displayMessage(inputMessage, reverseMessage){
  
   let alertElement = document.getElementById("alertMessage");

   alertElement.style.opacity = 1;


   let message = `<div>The message,<strong> ${inputMessage}</strong>, reversed is ${reverseMessage}</div>`;
   return message;
}