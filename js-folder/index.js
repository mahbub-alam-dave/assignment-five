// console.log("Js folder added");

document.getElementById("questions-box").addEventListener('click', function(){
    window.location.href = '../html-folder/question.html';
})

// const navTaskCount = document.getElementById("navTaskCount");
// const taskBox = document.getElementById('taskBox');
// const btnOne = document.getElementById("button-one");
// let changedTaskBox;
// let changedNavTaskCount;


// container title 
// const mobileFixing = document.getElementById("mobile-fixing").innerText;


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
    const addhistoryContent = document.createElement("p");
    addhistoryContent.textContent = `You have completed the task ${taskBoxTitle} at ${currentTime}`
    addhistory.appendChild(addhistoryContent);

    historySection.appendChild(addhistory);
}

document.getElementById("button-one").addEventListener("click", function(){
    
    
    // let newtask = parseFloat(taskBox.innerText);
    // changedTaskBox = newtask - 1;
    // console.log(changedTaskBox);
    // taskBox.innerText = changedTaskBox;
    alertNdisable('button-one');
    taskDecreasing();
    taskIncreasing();
    addHistory('mobile-fixing');

    // let newNavTask = parseFloat(navTaskCount.innerText) + 1;
    // navTaskCount.textContent = newNavTask;

    // const addhistory = document.createElement("div");
    // const addhistoryContent = document.createElement("p");
    // addhistoryContent.textContent = `You have completed the task ${mobileFixing} at ${currentTime}`
    // addhistory.appendChild(addhistoryContent);
    // historySec.appendChild(addhistory);
    
});