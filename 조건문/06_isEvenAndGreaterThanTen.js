// isEvenAndGreaterThanTen
// 문제
// 수를 입력받아 입력된 수가 10보다 크고 짝수인지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 자연수 (num > 0)
// 출력
// boolean 타입을 리턴해야 합니다.
// 주의 사항
// 10을 입력받은 경우, false를 리턴해야 합니다.

function isEvenAndGreaterThanTen(num) {
    // TODO: 여기에 코드를 작성합니다.
    if (num > 10 && num %2 ===0){
      return true;
    } else {
      return false;
    }
  }