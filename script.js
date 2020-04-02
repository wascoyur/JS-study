// let answerUser = '';
//========functions========
function cl(message/* , hint='' */){
	let secret = parseInt(Math.random()*100);
	let count = 0;
	let myFunc = function(){
		let getAnswerUser = parseInt(prompt(message).trim());
		let result = secret - getAnswerUser;
		count++;

		if (result > 0) {
			console.log('Загаданное число больше');
		}else if(result < 0){
			console.log('Загаданное число меньше');
		}else{
			console.log('Бинго!!! Вы угадали!!!');
		}
	};
	return myFunc;
}
cl('me');
console.log(cl('t'));
