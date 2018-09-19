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
    for (i=0; i<18; i++)
        bowlingGame.roll(0)

    const score = bowlingGame.getScore()

    expect(score).toBe(10);
});