let colorBtn=document.querySelectorAll(".filter_color");
let mainContainer=document.querySelector(".main_container");
let body=document.body;
let plusBtn=document.querySelector(".fa-plus");
let colors=["pink", "blue" , "green" , "black"];
for(let i=0;i<colorBtn.length;i++){
    colorBtn[i].addEventListener("click",function(e){
    let color=colorBtn[i].classList[1];
    mainContainer.style.backgroundColor=color;
    })
}
plusBtn.addEventListener("click", createModal)
function createModal(){
        //create modal
         let modal_container  =document.createElement("div");
         modal_container.setAttribute("class","modal_container");
         modal_container.innerHTML=`<div class="input_container">
         <textarea class="modal_input" placeholder="Enter Your Task"></textarea>
         </div>
         <div class="modal_filter_container">
             <div class="filter pink"></div>
             <div class="filter blue"></div>
             <div class="filter green"></div>
             <div class="filter black"></div>
         </div>`;
         body.appendChild(modal_container);
         handleModal(modal_container);
     
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
    let taskContainer=document.createElement("div")
    taskContainer.setAttribute("class","task_container")
    taskContainer.innerHTML=`<div class="task_filter ${color}"></div>
    <div class="task_desc_container">
        <h3 class="uid">#example</h3>
        <div class="task_desc">${task}</div>
    </div>
    
</div>`
mainContainer.appendChild(taskContainer);
let taskFilter=taskContainer.querySelector(".task_filter");
taskFilter.addEventListener("click",function changeColor() {
    let cColor=taskFilter.classList[1];
    let indx=colors.indexOf(cColor);
    let newColor=(indx + 1) % 4;
    taskFilter.classList.remove(cColor);
    taskFilter.classList.add(colors[newColor]);
})

}