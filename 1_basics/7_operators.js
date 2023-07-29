/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);

console.log('---------------')

console.log(10* (10 + 10))

console.log('---------------')
/**
 * 증가와 감소
 */
let number = 1;

number ++;
console.log(number);

number --;
console.log(number);
console.log('---------------')
/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number ++;
console.log(result, number);//1,2

result = number--;
console.log(result, number);//2,1

result = ++number; //number 먼저 증가
console.log(result, number) //2,2

result = --number; //number 먼저 감소
console.log(result, number) // 51-55줄은 거의 사용 X
console.log('---------------')//1,1
/**
 * 숫자 타입이 아닌 타입에 +, -를 사용하면 어떻게 될까?
 */

// string -> number
let sample ='99';

console.log(+sample);
console.log(typeof +sample); //number 출력

console.log(sample);
console.log(typeof sample);//string 출력

//boolean -> number
sample = true;
console.log(+sample); // 1 출력
console.log(typeof +sample); //number 출력

sample = false;
console.log(+sample); // 0 출력
console.log(typeof +sample); // number 출력

sample ='한성규';
console.log(+sample) //NaN(Not A Number) 출력

sample = '99';
console.log(-sample); //-99출력
console.log(typeof -sample); //number 출력
console.log('---------------')
/**
 * 할당 연산자 (assignment operator)
 */
number = 100;
console.log(number);

number += 10;
console.log(number); //110

number -=10;
console.log(number); //100

number *=10;
console.log(number); //1000

number /= 10;
console.log(number); //100

number %= 10;
console.log(number); //0

console.log('---------------')
/**
 * 비교 연산자
 * 
 * 1) 값의 비교, 거의 쓰이지 않음
 * 2) 값과 타입의 비교, 일반적으로 씀
 */
// 1) 값의 비교
console.log(5 == 5); //true
console.log(5 =='5'); //true
console.log(0 == ''); //true
console.log(true == 1); //true
console.log(false == 0); //true
console.log(true == '1'); //true
console.log('---------------')
// 2) 값과 타입의 비교 (실무에서 거의 사용)
console.log(5 === 5);//true
console.log(5 === '5'); //false
console.log(0 === ''); //false
console.log(true === 1); //false
console.log(false === 0); //false
console.log(true === '1'); //false
console.log('---------------')

console.log(5 != 5);//false
console.log(5 != '5'); //false
console.log(0 != ''); //false
console.log(true != 1); //false
console.log(false != 0); //false
console.log(true != '1'); //false
console.log('---------------')
// 아래꺼 많이 씀
console.log(5 !== 5);//false
console.log(5 !== '5'); //true
console.log(0 !== ''); //true
console.log(true !== 1); //true
console.log(false !== 0); //true
console.log(true !== '1'); //true

console.log('---------------')

/**
 * 대소 관계 비교 연산자
 */
console.log (100 > 1);
console.log (100 < 1);
console.log (100 <= 1);
console.log (100 >= 1);

/**
 * 삼항 조건 연산자 (ternary operator)
 */
console.log(10 > 0 ? '10이 0보다 크다': '10이 0보다 작다');//ture이면 : 기준 오른쪽, false이면 왼쪽 출력

console.log('---------------')
/**
 * 논리 연산자
 * 
 * 1) &&
 * 2) ||
 */
// &&는 모두 true여야 true를 반환
console.log(true&& true);
console.log(true&& false);
console.log(false&& true);
console.log(false&& false);

console.log('---------------')
//|| 하나만 true 여도 true를 반환
console.log(true|| true);
console.log(true|| false);
console.log(false|| true);
console.log(false|| false);

console.log(10> 1 && 20 > 2);//true
console.log(10< 1 && 20 > 2);//false
console.log(10< 1 && 20 < 2);//false

console.log(10> 1 || 20 > 2);//true
console.log(10< 1 || 20 > 2);//true
console.log(10< 1 || 20 < 2);//false
console.log('---------------')

/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */
console.log(true || '아이브'); //ture
console.log(false || '아이브'); //아이브
console.log(false && '아이브'); //false
console.log(true && '아이브'); //아이브

console.log(true && true && '아이브'); //아이브
console.log(true && false && '아이브'); //false

/**
 * 지수 연산자
 */
console.log(2**2);
console.log(10**3);

/**
 * null 연산자
 */
let name;
console.log(name);

name = name ?? '한성규'; // ??-> 좌측값이 null이거나 undefined이면 우측 값을 반환하라
console.log(name); // 한성규 출력

name = name ?? '아이브'; // 여기서는 ?? 좌측의 name이 null이나 undefined가 아니기 때문에 그대로 한성규가 출력됨
console.log(name); // 한성규 출력

let name2;
name2 ??= '한성규';
console.log(name2);
