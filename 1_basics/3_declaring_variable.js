/**
 * 변수 선언하기
 * 
 * 1) var - 더이상 안씀
 * 2) let 
 * 3) const
 */
var name = '코드팩토리';
console.log(name);

var age = 32;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경 가능
 */

ive = '안유진';
console.log(ive);

const newJeans ='뉴진스'; //const는 추후 값 변경 불가
console.log(newJeans);

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것. //var name;
 * 2) 할당 //var name = '한성규';
 */

let girlFriend;
console.log(girlFriend); // undefined 출력

const girlFriend2; // const는 반드시 할당해줘야함