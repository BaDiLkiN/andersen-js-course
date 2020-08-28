/**
 * Реализовать функцию union в этом файле, и экспортировать ее.
 *
 * Функция принимает 2 массива, и возвращает массив объедененных значений,
 * без дублирования
 *
 * console.log(union([5, 1, 2, 3, 3], [4, 3, 2])); -> [5, 1, 2, 3, 4]
 * console.log(union([5, 1, 3, 3, 4], [1, 3, 4])); -> [5, 1, 3, 4]
 */


export const union = (arr1, arr2) => {
    let arr;
    arr = arr1;
    for (let i = 0; i < arr.length; i++) {
        if (!arr.includes(arr2[i])) {
            arr.push(arr2[i]);
        }
    }
    return arr;
}
