const firstParam = +prompt('Введите первое значение');
    secondParam = +prompt('Введите второе значение');

const correctParams = ((Number.isFinite(firstParam) == true) && Number.isFinite(secondParam) == true)

if (correctParams && secondParam <= 10 && secondParam >= 2) {  
    console.log(firstParam.toString(secondParam));
}
else {
    console.log('Некорректный ввод!');
}