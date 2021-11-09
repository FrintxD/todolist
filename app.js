var checkBox = document.querySelectorAll('.circle');
var taskContent = document.getElementById('task-input');
var formTaskContent = document.querySelector('.form');
var taskControl = 1;

//Cheking checkbox.

checkBox.forEach((element)=>{
    element.addEventListener('click', ()=>{
        element.classList.toggle('check-circle');
    });
})


function getTaskContent(){
    return taskContent.value;
}

function addingNewTask(){
    let taskContainer = document.querySelector('.new-old-task-container');

    taskContainer.insertAdjacentHTML('afterbegin', `<div id="task${taskControl}" class="task"><div class="content"><div class="circle"><img src="images/icon-check.svg" alt="check-img"></div><p>${getTaskContent()}</p></div><img id="task${taskControl}" class="close" src="images/icon-cross.svg" width="12vw" alt="close"></div>`);
}

function removeTask(){
    var close = document.querySelectorAll('.close');
    close.forEach((element)=>{
        element.addEventListener('click', ()=>{
            console.log('si');
        });
    })

}

function clearinput(){
    if(getTaskContent() != null){
        taskContent.value = '';
    }
}


formTaskContent.addEventListener('submit',function(e){
    e.preventDefault()
    addingNewTask();

    taskControl++;

    clearinput();
})

removeTask();