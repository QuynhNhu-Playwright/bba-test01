// function createCharacters = ();
// characters = ['name','level', 'health']



2.
let attendant = [
    { player: 'Mario', score: '1000' },
    { player: 'junior', score: '900' },
    { player: 'senior', score: '850' },
    { player: 'fresher', score: '700' },
]
function printLeaderboard(attendant) {
    attendant.sort((a, b) => Number(b.score) - Number(a.score));
    const medals = ['🥇', '🥈', '🥉'];
    attendant.forEach((item, index) => {
        const rank = index < 3 ? medals[index] : `${index + 1}.`;
        console.log(`${rank} ${item.player} - ${item.score}`)
    });
}

printLeaderboard(attendant);
