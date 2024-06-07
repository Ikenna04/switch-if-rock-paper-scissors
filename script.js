// Rock Paper Scissors With Switch Statement

let player = 'rock';
let computer = 'rock';
let result;

switch (player) {
	case computer:
		result = 'Tie Game';
		break;
	case 'rock':
		if (computer === 'paper') {
			result = 'Computer Wins';
		} else {
			result = 'Player Wins';
		}
		break;
	case 'paper':
		if (computer === 'scissors') {
			result = 'Computer Wins';
		} else {
			result = 'Player Wins';
		}
		break;
	default:
		if (computer === 'rock') {
			result = 'Computer Wins';
		} else {
			result = 'Player Wins';
		}
}

console.log('You chose ', player);
console.log('Computer chose ', computer);
console.log('So ', result);
