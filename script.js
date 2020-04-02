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
		attempt--;
		if(attempt <= 0){
			let a = confirm('Попытки закончились, хотите сыграть еще?');
			if(a){
				reset();
				func();
			}else{
				return;
			}
		}

		if (result > 0) {
			console.log(`Загаданное число больше, количество оставшихся попыток: ${attempt}`);
			exec();
		} else if (result < 0) {
			console.log(`Загаданное число меньше, количество оставшихся попыток: ${attempt}`);
			exec();
		} else {
			console.log(`Поздравляю, Вы угадали!!! Количество попыток: ${count}`);
			let conf = confirm('Хотели бы сыграть еще?');
			if (conf) {
				count = 0;
				attempt = 10;
				func();
			}else{
				console.log('Пока!');
			}
			return;
		}
	};
	function reset() {
		count = 0;
		attempt = 10;
	}
	return exec;
}


let func = cl('Угадай число от 1 до 100');
func();
