/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 premitive 값은 copy by value다.(function, array, object 제외한 모두)
 * 2) 객체는 copy by reference다
 */

//copy by value 값을 그대로 가져오는 것
let original = '안녕하세요.';
let clone = original;

console.log(original);
console.log(clone);
console.log('------------------')
clone += ' 안유진입니다.';
console.log(original);
console.log(clone); // 여기서는 clone에만 더했으니 clone 값만 바뀌는게 당연하다.

// copy by reference
let originalObj = {
  name : '안유진',
  group : '아이브',
};
let cloneObj = originalObj

console.log(originalObj);
console.log(cloneObj);

originalObj['group'] = '코드팩토리';
console.log(originalObj);
console.log(cloneObj); // originalObj의 group의 value값을 변경했는데 cloneObj의 group의 value값도 변경됐다.

console.log(originalObj === cloneObj); // true
console.log(original === clone); //false

originalObj = {
  name : '한성규',
  group : '숭실대',
};

cloneObj = {
  name : '한성규',
  group : '숭실대',
};
console.log(originalObj === cloneObj); // false 출력, 위에서 object들의 값이 다 같다고 해서 true가 나온것이 아니다를 증명
// originalObj는 자신의 주소에 객체가 포함 되어 있는 주소를 가리키는 값을 가지고 있다
// cloneObj도 마찬가지(originalObj와 다른 주소)

const yuJin1 = {
  name : '안유진',
  group : '아이브'
}
const yuJin2 = yuJin1;
const yuJin3 = {
  name : '안유진',
  group : '아이브'
}
console.log(yuJin1 === yuJin2); //true
console.log(yuJin1 === yuJin3); //false
console.log(yuJin2 === yuJin3); //false

/**
 * Spread Operator 
 * 
 * array뿐만 아니라 object에도 존재함
 * 값을 추가할 때는 위치가 중요함
 */
const yuJin4 = {
  ...yuJin3,
} // 완전히 새로운 값으로 copy할 수 있다!!
console.log(yuJin4); // 이건 copy by value임

console.log(yuJin4 === yuJin3) //false

const yuJin5 ={
  year : '2003', // spread operator 써도 이렇게 추가할 수 있음
  ...yuJin3
}
console.log(yuJin5);

const yuJin6 ={
  name : '한성규',
  ...yuJin3
}
console.log(yuJin6); // yuJin3의 내용 그대로 출력


const yuJin7 ={
  ...yuJin3,
  name : '한성규',
}
console.log(yuJin7); //name값 바뀌어서 출력

const numbers = [1, 3, 5];
const numbers2 = [
  10,
  ...numbers,
]
console.log(numbers2)