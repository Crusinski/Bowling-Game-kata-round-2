const bowlingGame = require('./bowlingGame')

beforeEach(() => {
    bowlingGame.initialize()
});

test( 'Gutter Game, all turns score is 0', () => {
    for (i=0; i<20; i++)
        bowlingGame.roll(0)

    const score = bowlingGame.getScore()

    expect(score).toBe(0);
});

test( 'Score all ones', () => {
    for (i=0; i<20; i++)
        bowlingGame.roll(1)

    const score = bowlingGame.getScore()

    expect(score).toBe(20);
});

test( 'Score one spare then all zeros', () => {
    bowlingGame.roll(0)
    bowlingGame.roll(0)
    bowlingGame.roll(3)
    bowlingGame.roll(7)
    bowlingGame.roll(8)
    for (i=0; i<15; i++)
        bowlingGame.roll(0)

    const score = bowlingGame.getScore()

    expect(score).toBe(26);
});

test( 'Score one strike then all zeros', () => {
    bowlingGame.roll(10)
    bowlingGame.roll(3)
    bowlingGame.roll(4)
    for (i=0; i<18; i++)
        bowlingGame.roll(0)

    const score = bowlingGame.getScore()

    expect(score).toBe(17);
});

test( 'Score perfect game', () => {
     for (i=0; i<12; i++){
         bowlingGame.roll(10)
     }
     bowlingGame.roll(0)
     bowlingGame.roll(0)
     bowlingGame.roll(0)
     bowlingGame.roll(0)
     bowlingGame.roll(0)
     bowlingGame.roll(0)
     bowlingGame.roll(0)
     bowlingGame.roll(0)

    const score = bowlingGame.getScore()

    expect(score).toBe(300);
});

test( 'Score one strike then all zeros', () => {
    bowlingGame.roll(10)
    bowlingGame.roll(10)
    for (i=0; i<19; i++)
        bowlingGame.roll(0)

    const score = bowlingGame.getScore()

    expect(score).toBe(30);
});