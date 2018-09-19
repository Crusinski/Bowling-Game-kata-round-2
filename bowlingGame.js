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

        if (totalRolls[turn * 2] === 10){ //strike
            totalScore += totalRolls[(turn * 2)] + totalRolls[(turn*2) + 1] + totalRolls[(turn * 2) + 2] + totalRolls[(turn * 2) + 3]//
        }

        else if (calculateFrameScore (turn) === 10){ //spare
            totalScore += totalRolls[(turn * 2)] + totalRolls[(turn*2)+1] + totalRolls[(turn*2) + 2] 
        }

        else{ //normal bowl
            totalScore += calculateFrameScore (turn)
        }  
    }
    
    return totalScore
}



function calculateFrameScore (turn){
    return totalRolls[turn * 2] + totalRolls[(turn * 2) + 1]
}

function roll(pins){
    totalRolls.push(pins)
}


module.exports = bowlingGame