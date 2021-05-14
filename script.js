//always write use script so some errors like global declarations are not there can be evaluated
'use script'
let colorBtn=document.querySelectorAll(".filter_color");
let mainContainer=document.querySelector(".main_container");
let body=document.body;
let plusBtn=document.querySelector(".fa-plus");
let colors=["pink", "blue" , "green" , "black"];
let deleteState=false;
let crossBtn=document.querySelector(".fa-times");
for(let i=0;i<colorBtn.length;i++){
    colorBtn[i].addEventListener("click",function(e){
    let color=colorBtn[i].classList[1];
    mainContainer.style.backgroundColor=color;
    })
}
plusBtn.addEventListener("click", createModal);
crossBtn.addEventListener("click",setDeleteState);
function createModal(){
        //check if modal container not present alsready then first create
        let modalContainer=document.querySelector(".modal_container")
        if (modalContainer==null){
            //create modal
         let modalContainer  =document.createElement("div");
         modalContainer.setAttribute("class","modal_container");
         modalContainer.innerHTML=`<div class="input_container">
         <textarea class="modal_input" placeholder="Enter Your Task"></textarea>
         </div>
         <div class="modal_filter_container">
             <div class="filter pink"></div>
             <div class="filter blue"></div>
             <div class="filter green"></div>
             <div class="filter black"></div>
         </div>`;
         body.appendChild(modalContainer);
         handleModal(modalContainer);
        }
        let textArea=modalContainer.querySelector(".modal_input")
        textArea.value="";
     
}
function handleModal(modal_container){
    let cColor="black";
    let modalFilters=document.querySelectorAll(".modal_filter_container .filter")
    modalFilters[3].classList.add("border");
    for(let i=0;i<modalFilters.length;i++){
        modalFilters[i].addEventListener("click",function(){
            modalFilters.forEach((filter)=>{
                filter.classList.remove("border");
            })
            modalFilters[i].classList.add("border");
            cColor=modalFilters[i].classList[1];
            
        })
    } 
    let textArea=document.querySelector(".modal_input");
    textArea.addEventListener("keydown",function(e){
        if(e.key=="Enter"){
            console.log("Task",textArea.nodeValue,"color",cColor);
            //remove modal_container
            modal_container.remove();
            //create task dynamic
            createTask(cColor,textArea.value)
        }
    })
}
function createTask(color,task){
    let taskContainer=document.createElement("div");
    let uid=new ShortUniqueId();
    taskContainer.setAttribute("class","task_container")
    taskContainer.innerHTML=`<div class="task_filter ${color}"></div>
    <div class="task_desc_container">
        <h3 class="uid">#${uid()}</h3>
        <div class="task_desc"contenteditable="true">${task}</div>
    </div>
    
</div>`
mainContainer.appendChild(taskContainer);
let taskFilter=taskContainer.querySelector(".task_filter");
taskFilter.addEventListener("click",changeColor);
taskContainer.addEventListener("click",deleteTask);
}
function changeColor(e){
        let taskFilter=e.currentTarget;
        let cColor=taskFilter.classList[1];
        let indx=colors.indexOf(cColor);
        let newColor=(indx + 1) % 4;
        taskFilter.classList.remove(cColor);
        taskFilter.classList.add(colors[newColor]);
    
}
function setDeleteState(e){
    let crossBtn=e.currentTarget;
    let parent=crossBtn.parentNode;
    if(deleteState==false){
        parent.classList.add("active");
    }
    else{
        parent.classList.remove("active");
    }
    deleteState=!deleteState;
}
function deleteTask(e){
    let taskContainer=e.currentTarget;
    if(deleteState){
        taskContainer.remove();
    }
}