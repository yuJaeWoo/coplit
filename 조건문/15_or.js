// or
// 문제
// 두 개의 boolean 값을 입력받아 or 연산을 적용한 것과 같은 결과를 리턴해야 합니다.

// 입력
// 인자 1 : expression1
// boolean 타입의 값
// 인자 2 : expression2
// boolean 타입의 값
// 출력
// boolean 타입을 리턴해야 합니다.
// 주의 사항
// || 연산자 사용은 금지됩니다.
// ! 와 && 연산자를 사용합니다.

function or(expression1, expression2) {
    // TODO: 여기에 코드를 작성합니다.
    if(expression1 === true){
      if(expression2 === true){
        return true;
      } else {
        return true;
      }
    } else {
      if(expression2 === true) {
        return true;
      } else {
        return false;
      }
    }
  }
  