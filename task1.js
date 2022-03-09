const firstParam = +prompt("Введите первое значение");
    secondParam = +prompt("Введите второе значение");

if ((Number.isFinite(firstParam) == true) && Number.isFinite(secondParam) == true && secondParam <= 10 && secondParam >= 2) {    
    let res = firstParam.toString(secondParam);    
    console.log(res);
}
else {
    console.log('Некорректный ввод!');
}

