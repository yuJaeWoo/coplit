// isFalsy
// 문제
// 임의의 값을 입력받아 falsy 값인지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : anything
// 임의의 값
// 출력
// boolean 타입을 리턴해야 합니다.
// javascript에서 거짓으로 취급하는 값에 대해 검색해 봅니다. (js falsy value 또는 자바스크립트 거짓 값)

function isFalsy(anything) {
    // TODO: 여기에 코드를 작성합니다.
    if(anything === 0 || anything === undefined || isNaN(anything) || anything === '' || anything === null || anything === false){
      return true;
    } else {
      return false;
    }
  }
  