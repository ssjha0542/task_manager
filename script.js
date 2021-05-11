let colorBtn=document.querySelectorAll(".filter_color");
let mainContainer=document.querySelector(".main_container");
let body=document.body;
let plusBtn=document.querySelector(".fa-plus");
for(let i=0;i<colorBtn.length;i++){
    colorBtn[i].addEventListener("click",function(e){
    let color=colorBtn[i].classList[1];
    mainContainer.style.backgroundColor=color;
    })
}
plusBtn.addEventListener("click",function(){
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
    let modalFilters=document.querySelectorAll(".modal_filter_container .filter")
    modalFilters[3].classList.add("border");
    for(let i=0;i<modalFilters.length;i++){
        modalFilters[i].addEventListener("click",function(){
            modalFilters.forEach((filter)=>{
                filter.classList.remove("border");
            })
            modalFilters[i].classList.add("border");
        })
    }
})