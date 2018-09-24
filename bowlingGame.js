const bowlingGame =  {
    initialize,
    roll,
    getScore
};

var totalRolls = []

function initialize() {
    totalRolls = []
}

function getScore(pins){
    let totalScore = 0
    let rollNumber = 0

    for (let frame = 0; frame < 10; frame++){ 

        const frameIsStrike = totalRolls[rollNumber] === 10
        if (frameIsStrike){ 
            totalScore += calculateStrikeScore (rollNumber)
            rollNumber += 2
        }

        const frameIsSpare = totalRolls[rollNumber] + totalRolls[rollNumber + 1] === 10
        if (frameIsSpare){ 
            totalScore += calculateSpareScore (rollNumber)
            rollNumber += 2
        }

        else{ //normal bowl
            totalScore += calculateFrameScore (rollNumber)
            rollNumber += 2
        }  
    }
    
    return totalScore
}

function calculateStrikeScore (rollNumber){
    return totalRolls[rollNumber] + totalRolls[rollNumber + 1] + totalRolls[rollNumber  + 2]
}


function calculateSpareScore (rollNumber){
    return totalRolls[rollNumber] + totalRolls[rollNumber + 1] + totalRolls[rollNumber +2]
}

function calculateFrameScore (rollNumber){
    return totalRolls[rollNumber] + totalRolls[rollNumber + 1]
}

function roll(pins){
    totalRolls.push(pins)
}


module.exports = bowlingGame