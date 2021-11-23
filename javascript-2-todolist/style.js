let BTN_DOM = document.querySelector("#liveToastBtn") 
let LIST_DOM = document.querySelector("#list") 
let TASK_DOM = document.querySelector("#task") 
let LI_DOM = document.getElementsByTagName("li"); 


for(let i=0; i < LI_DOM.length;i++){ 
    let closeButton = document.createElement("span"); 
    closeButton.textContent = "\u00D7"; 
    closeButton.classList.add("close"); 
    closeButton.onclick = removeButton; 
    LI_DOM[i].append(closeButton); 
    LI_DOM[i].onclick = check; 
}


BTN_DOM.addEventListener('click', elemanEkle) 

function check(){
  this.classList.toggle("checked"); 
}

function removeButton(){
  this.parentElement.remove();    
}

function elemanEkle() {

    if (TASK_DOM.value == ""){
        $(".error").toast("show");
    }else{
        $(".success").toast("show");

        let liDOM = document.createElement('li') 
        LIST_DOM.appendChild(liDOM); 
        liDOM.innerHTML = task.value; 
        TASK_DOM.value = "";
        liDOM.onclick = check;
            
        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
            
        liDOM.append(closeButton);
        LIST_DOM.append(liDOM);
        inputElement.value = ("");
    }
}    








 

 