

const button=document.querySelector("#button");
const field=document.querySelector("#field");
const todoWrapper=document.querySelector("#todo-wrapper");
let del=document.querySelector(".del");

let todo=field.value;

function creatItem(value){
    return `
          <div class="item">
                    <div class="left">
                         <input type="checkbox" name="" id="">
                         <p>${value}</p>
                    </div>

                    <div class="right">
                         <button class="edit">
                              <i class="fa-regular fa-pen-to-square"></i>
                              <span>Edit</span>
                         </button>

                         <button class="del">
                              <i class="fa-solid fa-trash-can"></i>
                              <span>Del</span>
                         </button>

                    </div>
               </div>
     `;

}

button && button.addEventListener("click", (e)=>{
   e.preventDefault();
   let todo=field.value;

   if(todo.length < 5){
    alert("Xato");
    field.style.outlineColor="red";
    field.focus();
    return ;
   }

   const item=creatItem(todo);
   todoWrapper.innerHTML+=item;
   field.value="";
   field.focus();


})