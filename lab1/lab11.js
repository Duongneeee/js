const game = {
    team1: 'Man Xanh',
    team2: 'Man Đỏ',

    players: [
        [
            'Julian Alvarez',
            'Raheem Sterling',
            'Erling Haaland',
            'Phil Foden',
            'Bernardo Silva',
            'Kevin De Bruyne',
            ' Rodri',
            'Oleksandr Zinchenko',
            'Nathan Ake',
            'Ruben Dias',
            'Kyle Walker'
        ],
        [
            'Tyrell Malacia',
            'Marcus Rashford',
            'Anthony Martial',
            'Bruno Fernandes',
            'Cristiano Ronaldo',
            'Lisandro Martinez',
            'Harry Maguire',
            'Phil Jones',
            'Eric Bailly',
            'Christian Eriksen',
            'David de Gea', 
        ],

    ],

    score: '4:0',
    scored: ['Erling Haaland','Kevin De Bruyne','Oleksandr Zinchenko',' Rodri'],
    date: 'Nov 10th,2023',
    odds: {
        team1: 1.55,
        x:2.25,
        team2: 6.25
    }
}
// 1
const [players1,players2] = game.players;
console.log(players1,players2);

// 2

const [gk,...fieldPlayers] = players1;
console.log(gk,fieldPlayers);

// 3

const allPlayers = [...players1,...players2];
console.log(allPlayers);

// 4
const playersFinal = [...players1,'Thiago','Coutinho','Perisic'];

// 5 
const {odds:{team1,x:daw,team2}} = game;
console.log(team1,daw,team2);

// 6

const printGoals = function(...players){
    console.log(players);
    console.log(`${players.length} goals`)
}

printGoals(...game.scored);

// 7
 team1 < team2 && console.log('Team 1 Win');

// lab 1.2

// 1
for (const [x,y] of game.scored.entries()) console.log(`Goal ${x+1}:${y}`);

// 2

let average = 0;

for (const odd of Object.values(game.odds))
average += odd;
average /= Object.values(game.odds).length ;
console.log(average);

// 3

for (const [team,odd] of Object.entries(game.odds)){

const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
console.log(`Odd off ${teamStr} ${odd}`);
}

// lab 2.1

const gameEvents = new Map([
    [17,'GOAL'],
    [36,'Substitution'],
    [47,'GOAL'],
    [61,'Substitution'],
    [64,'Yellow card'],
    [69,'Red card'],
    [70,'Substitution'],
    [72,'Substitution'],
    [76,'GOAL'],
    [80,'GOAL'],
    [92,'Yellow card'],
]);

// 1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${time/gameEvents.size} minutes`);

//4
for (const[key,values] of gameEvents.entries()){
    const half = key <= 45 ? 'FISRT' : 'SECOND';
    console.log(`[${half} HALF] ${key} : ${values}`);
}

// lab2.2
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click',function(){
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    console.log(rows);
    
    for( const [i,row] of rows.entries()){
        const [fisrt,second] = row.toLowerCase().trim().split('_');
        const output = `${fisrt}${second.replace(second[0],second[0].toUpperCase())}`;
        console.log(`${output.padEnd(20)}${`+`.repeat(i+1)}`);
    }

})
