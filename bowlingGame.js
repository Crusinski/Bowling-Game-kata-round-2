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

        const frameIsStrike = totalRolls[frame] === 10
        if (frameIsStrike){ 

            if ((frame + 1) === 10)
            totalScore += calculateStrikeScore (frame)
           
            else{
                totalScore += calculateStrikeScore (frame)
                frame ++
            }

        }

        else if (calculateFrameScore (frame) === 10){ //spare
            totalScore += calculateSpareScore (frame)
        }

        else{ //normal bowl
            totalScore += calculateFrameScore (frame)
        }  
    }
    
    return totalScore
}

function calculateStrikeScore (frame){
    return totalRolls[(frame * 2)] + totalRolls[(frame*2) + 1] + totalRolls[(frame * 2) + 2]  + totalRolls[(frame * 2) + 3] 
}


function calculateSpareScore (frame){
    return totalRolls[(frame * 2)] + totalRolls[(frame*2)+1] + totalRolls[(frame*2) + 2]
}

function calculateFrameScore (frame){
    return totalRolls[frame * 2] + totalRolls[(frame * 2) + 1]
}

function roll(pins){
    totalRolls.push(pins)
}


module.exports = bowlingGame