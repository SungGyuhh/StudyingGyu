/**
 * Hoisting
 */
console.log('Hello');
console.log('World');

//console.log(name); //undefined 출력
//var name = '한성규';
//console.log(name);

/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 * var 뿐만 이나라 let, const도 hoisting 발생
 */

//var name;
//console.log(name); //undefined 출력
//name = '한성규';
//console.log(name);

console.log(yuJin) //error가 남  Cannot access 'yuJin' before initialization, const도 동일
let yuJin = '안유진' //만약 이 코드가 없다면 yuJin is not defined 에러 발생
