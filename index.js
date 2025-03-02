
document.getElementById("questions-box").addEventListener('click', function(){
    window.location.href = 'question.html';
});

// show day name, date, month and year Dynamically
const dateMonthYear = document.getElementById("dateMonthYear");
const dayName = document.getElementById("dayName");

let todayDate = new Date();

const weekday = todayDate.toLocaleDateString('en-GB', { weekday: 'short'});
let DMY = { month: 'short', day: '2-digit', year: 'numeric' };
let formattedDate = todayDate.toLocaleDateString('en-US', DMY);

dayName.textContent = weekday +',';
dateMonthYear.textContent = formattedDate;

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

    if(taskBox.innerText === "0") {
        window.alert('Congrats! You have completed all the task')
    }
}

// function for task increasing in the header bar
function taskIncreasing(){
    const navTaskCount = document.getElementById("navTaskCount");
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


const completeBtns = document.querySelectorAll('.complete-btn');
 
for(let completeBtn of completeBtns) {
    completeBtn.addEventListener("click", function(event){

            alertNdisable(event.target.id);
            taskIncreasing();
            taskDecreasing();
            addHistory(event.target.id+"-HistoryAdd");

           
    })
}

document.getElementById('clearHistoryBtn').addEventListener('click', function(){
    
    const clearHistory = document.querySelectorAll('.stored-history');
    for(let history of clearHistory){
        history.remove();
    }

});

document.getElementById("bgColor").addEventListener("click", function(){
    const webBody =  document.getElementById("changeBgcolor")
    const allBgColor = ["#A0A0A0", "#CCFFFF", "#FFCCCC", "FFFFCC", "#E0E0E0"];
    let randomBgColor = Math.floor(Math.random() * allBgColor.length -1) +1;
    webBody.style.backgroundColor = allBgColor[randomBgColor];
    console.log(randomBgColor)
})

