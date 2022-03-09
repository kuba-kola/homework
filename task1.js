const firstParam = +prompt('Введите первое значение');
    secondParam = +prompt('Введите второе значение');

const correctParams = (Number.isFinite && Number.isFinite)
const compare = correctParams && secondParam <= 10 && secondParam >= 2;

if (compare) {  
    console.log(firstParam.toString(secondParam));
}
else {
    console.log('Некорректный ввод!');
}