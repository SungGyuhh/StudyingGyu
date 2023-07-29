/**
 * Array Function Methods
 */
let iveMembers = [
  '안유진',
  '가을',
  '레이',
  '장원영',
  '리즈',
  '이서',
]

console.log(iveMembers);

// Stack이다 이거 아닌가?
// 맨끝값으로
// push()
console.log(iveMembers.push('코드팩토리')); // 7 출력, 마지막 index에 추가
console.log(iveMembers);

// pop()
console.log(iveMembers.pop()); // 코드팩토리 출력
console.log(iveMembers); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ] 출력

console.log('-----------')

//처음 값으로
//shift
console.log(iveMembers.shift()); // 안유진 출력
console.log(iveMembers); // [ '가을', '레이', '장원영', '리즈', '이서' ] 출력

//unshift()
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

//splice()
console.log(iveMembers.splice(0, 3))//(몇번째 부터, 몇개) 삭제하기
console.log(iveMembers);
console.log('-----------');
// 위에 내용은 실무에서 잘 사용하지는 않으나 알고 있으면 좋음
// 위에 내용보다 다른 코드들을 사용한다.


iveMembers = [
  '안유진',
  '가을',
  '레이',
  '장원영',
  '리즈',
  '이서',
]

console.log(iveMembers);

// 새로운 array 만들어내기
// concat()
console.log(iveMembers.concat('코드팩토리')); //push랑 다른점은 완전히 새로운 array를 만들어서 반환한다는 것이다.
console.log(iveMembers); //기존 array 반환

// slice()
console.log(iveMembers.slice(0, 3)); //(어떤 index부터, 몇번 index+1까지)
console.log(iveMembers); //기존 array 반환
console.log('-----------');

//spread operator
let iveMembers2 = [
  ...iveMembers, // ...을 사용하지 않으면 array 안에 array가 들어간 것으로 출력됨
];
console.log(iveMembers2);

let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers); // true 출력

console.log([
  ...iveMembers,
] === iveMembers); //false 출력, 메모리 공간이 다르기 때문

console.log('-----------');
// 이 다음부터 압도적으로 많이 사용하는 것 !!!!

// join(), 모든 값들을 string으로 엮을 때 많이 사용함
console.log(iveMembers.join()); // string형태(, 와 ''가 없는)로 출력, typeof 해보면 string으로 나옴
console.log(iveMembers.join('/')) //(나눔의 기준이 되는 형태)
console.log('-----------');
// 정렬하는법
// sort(), 반환값이 없음
// 오름차순 정렬
iveMembers.sort()
console.log(iveMembers); // ㄱ부터 오름차순으로 정렬

console.log(iveMembers.reverse()); // 내림차순으로 정렬

let numbers = [
  1,
  9,
  7,
  9,
  3,
]
console.log(numbers);

// a, b를 비교했을때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
// 오름차순
numbers.sort((a, b)=>{
  return a > b ? 1 : -1;
});
console.log(numbers);
// 내림차순
numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);
console.log('-----------');

// map(), array의 값들을 순회하면서 각각의 값들을 변형시켜주는 역할, 원래 array 건들지 않음
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
  if (x === '안유진'){
    return `아이브: ${x}`;
  }else{
    return x;
  }
}));
console.log(iveMembers); // 원래 array 변형 없다는 것을 알 수 있음

//filter()
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0)); // (x) => true로 작성하면 array 전부 반환, (x) => false로 작성하면 [] 반환

// find()
console.log(numbers.find((x) => x % 2 === 0)); // 8 출력, 가장 첫번째로 해당되는 값만 찾아줌

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0)); // 1 출력

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0)) // 기존 반환 값이 p에 들어가고 다음 반환 값이 n에 들어간다.
/**
 * 위 함수 동작 순서
 * 1) 초기값인 0이 p에 입력된다
 * 2) numbers array의 첫번째 값인 1이 n에 입력된다.
 * 3) p + n 즉, 0 + 1의 결과값인 1이 반환된다.
 * 4) 3에서 반환된 값(1)이 p에 입력된다.
 * 5) array의 두번째 값인 8이 n에 입력된다.
 * 6) p + n 즉, 1 + 8의 결과값인 9가 반환된다.
 * 7) 6에서 반환된 값(9)가 p에 입력된다.
 * 8) numbers 리스트의 모든 값들을 다 순회할때까지 반복, 결국 모든 값을 다 더한 25가 반환된다.
 */