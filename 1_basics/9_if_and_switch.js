/**
 * If and Switch
 */
//If문
let number = 5;

if (number % 2 === 0){
  console.log('number 변수는 짝수입니다.');
} else {
  console.log('number 변수는 홀수입니다.');
}

if (number % 2 === 0){
  console.log('2의 배수입니다.')
}else if (number % 3 === 0){
  console.log('3의 배수입니다.')
}else{
  console.log('2, 3의 배수가 아닙니다.')
}

//Switch문 
const englishDay = 'Monday';

let koreanDay;

switch(englishDay) {
  case 'Monday':
    koreanDay = '월요일';
    break;
  case 'TuesDay':
    koreanDay = '화요일';
    break;
  case 'WednesDay':
    koreanDay = '수요일';
    break;
  case 'ThursDay':
    koreanDay = '목요일';
    break;
  case 'FriDay':
    koreanDay = '금요일';
    break;
  default:
    koreanDay = '주말';
    break;
}
console.log(koreanDay);