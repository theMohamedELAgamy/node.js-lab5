



var socket = io.connect('http://localhost:3000')

function sendmessage (){
  
    let text_message=document.getElementsByClassName('message-content')[0].value
    document.getElementsByClassName('message-content')[0].value=''
    displaymassege(text_message)
}

function displaymassege(text_message){
    let chat_area=document.getElementsByClassName("chat-area")[0]
    let message=document.createElement('div')
    message.className="message"
    message.innerHTML=text_message
    chat_area.appendChild(message)
}