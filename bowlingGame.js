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

    for (let turn = 0; turn < 10; turn++){ 

        const frameIsStrike = totalRolls[turn * 2] === 10
        if (frameIsStrike){ //strike
            totalScore += calculateStrikeScore (turn)
        turn ++
        }

        else if (calculateFrameScore (turn) === 10){ //spare
            totalScore += calculateSpareScore (turn)
        }

        else{ //normal bowl
            totalScore += calculateFrameScore (turn)
        }  
    }
    
    return totalScore
}

function calculateStrikeScore (turn){
    return totalRolls[(turn * 2)] + totalRolls[(turn*2) + 1] + totalRolls[(turn * 2) + 2] + totalRolls[(turn * 2) + 3]
}

function calculateSpareScore (turn){
    return totalRolls[(turn * 2)] + totalRolls[(turn*2)+1] + totalRolls[(turn*2) + 2]
}

function calculateFrameScore (turn){
    return totalRolls[turn * 2] + totalRolls[(turn * 2) + 1]
}

function roll(pins){
    totalRolls.push(pins)
}


module.exports = bowlingGame