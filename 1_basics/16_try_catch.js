/**
 * try...catch
 * 
 * 1) 에러를 발생시킬때 -> 던진다고 한다. (throw)
 * 2) 에러를 명시적으로 인지할때 -> 잡는다. (catch)
 */

function runner(){
  try{

  
     console.log('Hello');

     throw new Error('큰 문제가 생겼습니다'); // 에러를 던지게 되면 이 밑에 코드들이 실행되지않음

     console.log('한성규');
  } catch(e){ // throw를 하면 바로 catch문으로 감, catch문을 error 던진것을 잡을때 사용
     console.log('---catch---');
     console.log(e);
  } finally{ // try에서 error가 나던 안나던 무조건 실행, catch문 실행 후 finially문 실행
     console.log('---finially---');   
  }
}
runner();
