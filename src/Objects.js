/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
    if (data.gender == 'female') delete data.age;
    else if (data.income === undefined) data.income = 100000;
    return data;
}

/*
В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    let arr1 = Object.keys(obj1);
    let arr2 = Object.keys(obj2);
    let arr3 = Object.keys(obj3);
    let arr4 = arr1.concat(arr2);
    let arr5 = arr3.concat(arr4);
    return arr5.sort();
}

/*
@@ -23,4 +32,11 @@ export function objectFieldsList(obj1, obj2, obj3) {
Количество клонов - count.
*/
export function objectClone(obj, count) {
    let arr = [];
    for (let i = 1; i <= count; i++) {
        let objClone = JSON.parse(JSON.stringify(obj));
        objClone.id = i - 1;
        arr.push(objClone);
    }
    return arr;
}
