

document.getElementById("questions-box").addEventListener('click', function(){
    window.location.href = '../html-folder/question.html';
})


// function for window alert and button disable
function alertNdisable(buttonID){
    const completedBtn = document.getElementById(buttonID)
    window.alert("Board updated Successfully");
    completedBtn.disabled = true;
}

// function for task decreasing
function taskDecreasing(){
    const taskBox = document.getElementById('taskBox');
    let changedTaskBox;
    let newtask = parseFloat(taskBox.innerText);
    changedTaskBox = newtask - 1;
    taskBox.innerText = changedTaskBox;
}

// function for task increasing in the header bar
function taskIncreasing(){
    const navTaskCount = document.getElementById("navTaskCount");
    // let changedNavTaskCount;
    let changedNavTaskCount = parseFloat(navTaskCount.innerText) + 1;
    navTaskCount.textContent = changedNavTaskCount;
}

// function for add history
function addHistory(taskTitle) {
    // get current time 
    let currentTime = new Date().toLocaleTimeString();
    const historySection = document.getElementById('historysec');
    const taskBoxTitle =  document.getElementById(taskTitle).innerText;

    const addhistory = document.createElement("div");
    addhistory.classList.add('stored-history');
    const addhistoryContent = document.createElement("p");
    addhistoryContent.textContent = `You have completed the task ${taskBoxTitle} at ${currentTime}`
    addhistory.appendChild(addhistoryContent);

    historySection.appendChild(addhistory);
}

/* document.getElementById("button-one").addEventListener("click", function(){
    
    alertNdisable('button-one');
    taskDecreasing();
    taskIncreasing();
    addHistory('mobile-fixing');
    
});


document.getElementById("button-two").addEventListener('click', function(){
    alertNdisable('button-two');
    taskDecreasing();
    taskIncreasing();
    addHistory('darkMode');
}); */


const completeBtns = document.querySelectorAll('.complete-btn');
 
for(let completeBtn of completeBtns) {
    completeBtn.addEventListener("click", function(event){
        console.log(event.target.id)

        /* if(event.target.id === "button-one") {
            alertNdisable(event.target.id);
            taskIncreasing();
            taskDecreasing();
            addHistory(event.target.id+"Title");
        }

        else if(event.target.id === "button-two") {
            alertNdisable(event.target.id);
            taskIncreasing();
            taskDecreasing();
            addHistory('darkMode');
        } */

            alertNdisable(event.target.id);
            taskIncreasing();
            taskDecreasing();
            addHistory(event.target.id+"-HistoryAdd");
    })
}

document.getElementById('clearHistoryBtn').addEventListener('click', function(){
    // const removeHistory =document.getElementsByClassName('stored-history').innerText;
    // console.log(removeHistory)
    // document.getElementById('historysec').removeChild(removeHistory)
    // const clearHistory = document.getElementById('historysec');

    const clearHistory = document.querySelectorAll('.stored-history');
    for(let history of clearHistory){
        history.remove();
    }

})