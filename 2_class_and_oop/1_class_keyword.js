/**
 * Class Keyword
 * 
 * Class의 정의
 * 클래스는 객체지향 프로그래밍에서 특정 객체(인스턴스)를
 * 생성하기 위한 변수와 메소드(함수)를 정의하는 일종의 틀이다.
 * 
 * 쉽게 얘기하면 정보를 일반화해서 정리하는 방법이다!
 * 
 * 인스턴스화 : 클래스를 객체로 만드는 것
 */
class IdolModel{
  name;
  year;

  constructor(name, year){
    this.name = name;
    this.year = year;
  } // property인 name과 year를 정의하지 않아도 사용가능

  sayName(){
    return `안녕하세요 저는 ${this.name}입니다.`
  }
}

// constructor - 생성자
const yuJin = new IdolModel('안유진', 2003); //IdolModel에 새로운 인스턴스 저장하기
console.log(yuJin);
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);
const ray = new IdolModel('레이', 2004);
console.log(ray);

console.log(yuJin.name); //안유진 잘나옴
console.log(yuJin.sayName())

console.log(typeof IdolModel); //function, class는 함수다.
console.log(typeof yuJin); //object