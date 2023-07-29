/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서
 * 반환받고 싶다면 어떻게 해야할까?
 */
console.log((2 * 10 / 2 % 3).toString());
// 2가 아니라 3을 넣고 싶다. 지금까지 배운 지식으로는 
console.log((3 * 10 / 2 % 3).toString()); // 이렇게 한다.
console.log('-------------------------');
/**
 * DRY!!
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */
function calculate() {
  console.log((2 * 10 / 2 % 3).toString());
}

//calculate();
console.log('-------------------------');

function calculate(number/*파타미터*/) {
  console.log((number * 10 / 2 % 3).toString()); 
}

/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고 한다.
 * 
 * 실제 입력하는 값은 argument라고 한다.
 */
calculate(4);

//여러개의 parameter를 사용하는 방법
function multiply(x, y){
  console.log(x * y);
}
multiply(2, 4); //8

//default 값 넣기
function multiply(x, y=10) {
  console.log(x * y);
}
multiply(2, 4); //8
multiply(2); //20
console.log('-------------------------');
/**
 * 반환받기
 * return 받기
 */
function multiply(x, y){
  return x * y ;
}

const result1 = multiply(2, 4);
console.log(result1);

const result2 = multiply(4, 5);
console.log(result2);

/**
 * Arrow 함수
 * 
const multiply = (parameter) => {
  body
}
 */
const multiply2 = (x, y) => {
  return x * y;
}
console.log(multiply2(3, 4));

// 더 간결하게
const multiply3 = (x, y) => x * y;
console.log(multiply3(4, 5));

// parameter 하나 사용
const multiply4 = x => x * 2;
console.log(multiply4(2));

const multiply5 = x => y => z => `x: ${x} y:${y} z:${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x) {
  return function(y){
    return function(z){
      return `x: ${x} y:${y} z:${z}`
    }
  }
}
console.log(multiply6(3)(4)(5));

const multiplyTwo = function(x, y) {
  return x * y;
}
console.log(multiplyTwo(4, 5));

console.log('-------------------------');
const multiplyThree = function(x, y, z) {
  console.log(arguments); //[Arguments] { '0': 4, '1': 5, '2': 6}
  return x * y * z;
}
console.log(multiplyThree(4, 5, 6)) //120

const multiplyAll = function(...arguments/*무한하게 받은 arguments*/) {
  return Object.values(arguments).reduce((a, b) => a * b, 1);
}
console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9,10)); //1814400

//즉시 실행 함수
(function(x, y) {
  console.log(x * y);
})(4, 5) // 20

console.log(typeof multiply); //function
console.log(multiply instanceof Object); //true, 좌측이 우측과 같은 타입인가? 함수는 Object이다!!