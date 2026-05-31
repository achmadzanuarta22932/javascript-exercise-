// fix  problem for minion worst job and unfair job => promoted 

// minion taks simply assigned by their ID 
// each day they work on that task 
//  1 day task = 99 integres , shift advance 
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

    console.log(filteredResults);

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
var dayTask = [5, 10, 15, 10, 7,];
var n = 1;

var nightTask = [ 5, 10, 12, 3, 5, 7, 12, 3, 6, 10, 13, 4, 4, 9, 18, 2]
var n = 1;

var noreliableData = [1,2,3,4,5,6,7,8]
var n = 1;

filesReports(dayTask,n);
filesReports(nightTask,n);
filesReports(noreliableData,n);
