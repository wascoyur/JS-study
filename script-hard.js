
document.write("Lesson04-hard<br />");
function exec(a){
  output(a, ` - исходное значение данных`)
  typeof(a) === 'string'? trimmer(a):output(a, 'не является строкой');
  return;
};
function output(out, decision) {
  document.write(out + `${decision} <br \/>`);
}
function trimmer(longer){
  let result = longer.trim();
  if (result.length > 30) {
    result = result.slice(0,31)
    result += '...';
    output(`${result}`,` - Новое значение данных` )
  }
}

let input = prompt('Введите значение')
//input = Number(input);
exec(input);
