const bowlingGame =  {
    initialize,
    roll,
    getScore
};

var totalRolls = []

function initialize() {
    totalRolls = []
}

function getScore (pins){
    let totalScore = 0
    let rollNumber = 0

    
    for (let turn = 0; turn < 10; turn++){
        
        const turnScoredSpare = calculateFrameScore(rollNumber) === 10
        if (turnScoredSpare){
            totalScore += totalRolls[rollNumber] + totalRolls[rollNumber+1] + totalRolls[rollNumber+2]
        }
        else{
            totalScore = calculateFrameScore(rollNumber) 
        }
        rollNumber += 2
    }    
        
    return totalScore
}

function calculateFrameScore (rollNumber){
    return totalRolls[rollNumber] + totalRolls[rollNumber+1]
}

function roll(pins){
    totalRolls.push(pins)
}


module.exports = bowlingGame