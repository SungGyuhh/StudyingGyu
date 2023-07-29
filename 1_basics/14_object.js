/**
 * Object / 객체
 */

// key : value pair
let yuJin = {
  name : '안유진',
  group : ' 아이브',
  dance: function(){
    return `${this.name}이 춤을 춥니다.`; //this 는 현재 객체를 가리킴
  }
};

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name'])

const key = 'name';

console.log(yuJin[key]);

console.log(yuJin.dance());

//겍체를 선언할 때 변수를 사용하는 방법
const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
  [nameKey]: nameValue, // []를 사용
  [groupKey]: groupValue,
  dance: function(){
    return `${this.name}이 춤을 춥니다.`;
  }
}
console.log(yuJin2);
console.log(yuJin2.dance());

// 객체 안에 value값 변경
yuJin2['group'] = '코드팩토리';
console.log(yuJin2);

// 존재하지 않은 속성을 추가할 수 도 있다.
yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2);

// 삭제하는 법
delete yuJin2['englishName'];
console.log(yuJin2);

// 이상한점 : const를 썼는데도 값을 변경하는데 에러가 안생긴다?
// 왜 인가?! 차후 배움

/**
 * const로 선언한 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체를 변경할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메소드는 변경할 수 있다.
 */

const wonYoung = {
  name : '장원영',
  group : '아이브',
}

console.log(wonYoung);

// wonYoung = {}; // 객체 자체 변경을 불가

wonYoung['group'] = '코드팩토리';
console.log(wonYoung); // 이건 가능!!

/**
 * 모든 키 값 다 가져오기
 */
console.log(Object.keys(wonYoung));

/**
 * 모든 value값 다 가져오기
 */
console.log(Object.values(wonYoung));

// 비교적 빠르게 객체를 생성하는 방법
const name = '안유진';
const yuJin3 = {
  name,
};
console.log(yuJin3);
