// let answerUser = '';
//========functions========
function cl(message /* , hint='' */) {
	let secret = parseInt(Math.random() * 100);
	let count = 0;
	let attempt = 10;
	let exec = function() {
		let getAnswerUser = (prompt(message));
		if(getAnswerUser === null){
			return;
		}
		let t = Number.isInteger(parseInt(getAnswerUser));
		if(!t){
			console.log('Введи число!');
			exec();
		}
		let result = secret - getAnswerUser;
		count++;

		if (result > 0) {
			console.log('Загаданное число больше');
			exec();
		} else if (result < 0) {
			console.log('Загаданное число меньше');
			exec();
		} else {
			console.log('Бинго!!! Вы угадали!!!');
			console.log(`Количество попыток: ${count}`);
			return;
		}
	};
	return exec;
}

let func = cl('Угадай число от 1 до 100');
func();
