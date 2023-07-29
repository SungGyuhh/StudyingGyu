/**
 * 타입변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */
let age = 32;

//명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge); // string, 32

//암묵적
let test = age + ''; // 숫자에 글자를 더하면 string으로 변환됨
console.log(typeof test, test);

console.log('98' + 2);
console.log('98' * 2);//196 / string에는 곱하기가 없어서 '98'이 암묵적으로 number로 변환이 됨
console.log('98' - 2);//96 / 이하 동문
console.log('---------------------');
/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log(typeof (99).toString(), (99).toString()); //string
console.log(typeof (true).toString(), (true).toString()); //string
console.log(typeof (Infinity).toString(), (Infinity).toString()); //string

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0')); // number, 0 정수로 변환
console.log(typeof parseFloat('0.99'), parseFloat('0.99')); // number, 0.99 실수로 변환
console.log(typeof +'1', +'1'); //number 1
console.log('---------------------');
/**
 * Boolean 타입으로의 변환
 */
console.log(!'x'); //false
console.log(!!'x'); //true

console.log(!!''); //false 값이 있냐 없냐로 true or false 결정
console.log(!!0); //false 0도 false
console.log(!!'0') //true string에 숫자가 들어있기때문에 true
console.log(!!'false'); //true
console.log(!!false);  //false
console.log(!!undefined); //false
console.log(!!null); //false

console.log(!!{}); //true, object는 무조건 true
console.log(!![]); //true, array도 무조건 true

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 숫자 0일 때
 * 
 * 모두 false를 반환한다.
 */