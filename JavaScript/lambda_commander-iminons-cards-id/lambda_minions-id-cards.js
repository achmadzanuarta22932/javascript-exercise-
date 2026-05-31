// fix  problem for minion worst job and unfair job => promoted 

// minion taks simply assigned by their ID 
// each day they work on that task 
//  1 day task = 99 integres , shift advance 

function generateRandomTasks (totalTask){  // this to generate randomate taks 
    var randomArray = [];

    for (var task = 0; task < totalTask; task ++){
        var randomizeTaskID = Math.floor(Math.random() * 10000) + 1 ;
        randomArray.push(randomizeTaskID);
    }
    return randomArray;
}

function answerData(data, n) {
    var recentReport = {};

    for (var cards = 0; cards < data.length; cards++) {
        var minionID = data[cards];

        if (recentReport[minionID] === undefined) {
            recentReport[minionID] = 1;
        }
        else {
            recentReport[minionID] = recentReport[minionID] + 1; 
        }
    }    
         var lastResults = [];  
        for (var ID = 0; ID < data.length; ID++) {
            var currentID = data[ID];

            if (recentReport[currentID] <= n) {
                lastResults.push(currentID)
            }
    }
        return lastResults;
    };

function filesReports (taskData,minions) {
    var filteredResults = answerData(taskData,minions);

    console.log("realData     :", taskData);
    console.log("filteredData :", filteredResults);

    var currentStatus = "";

    if (filteredResults.length < taskData.length){
        currentStatus = "commander lambda applaused, your are PROMOTED!";
        console.log("status:" + currentStatus);
    } else { 
        currentStatus = "commander lamda displaessed, you are DEMOTED!";
        console.log("status:" + currentStatus );
    }
}

// -- test code if it works 
var n = 1;

var automateGetData = generateRandomTasks (100);
filesReports (automateGetData,n);
