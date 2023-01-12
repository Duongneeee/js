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



