
1.
function createCharacters() {
    const characters = [
        { name: 'Như', level: 1, health: 200 },
        { name: 'Châu', level: 2, health: 600 },
        { name: 'Hoàng', level: 3, health: 700 }
    ];

    const charactersPowerUp = characters.map(ch => {
        return {
            name: ch.name.toUpperCase(),
            level: ch.level * 2,
            health: ch.health * 3
        }
    })
    const possibleWinners = charactersPowerUp.filter(f => f.health > 1000)

    console.log("result:", charactersPowerUp);
    console.log("result 2:", possibleWinners);
}

createCharacters();



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
