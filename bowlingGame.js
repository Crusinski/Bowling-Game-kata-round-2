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

        if (totalRolls[turn] + totalRolls[(turn*2)+1] === 10){
            totalScore += totalRolls[turn] + totalRolls[(turn*2)+1] + totalRolls[(turn+1)*2] 
            turn ++
        }
        else{
            totalScore += totalRolls[turn] + totalRolls[(turn*2)+1]
        }  
    }
    
    return totalScore
}



// function calculateFrameScore (turn){
//     return totalRolls[turn] + totalRolls[rollNumber+1]
// }

function roll(pins){
    totalRolls.push(pins)
}


module.exports = bowlingGame