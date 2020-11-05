// isOdd
// 문제
// 수를 입력받아 홀수인지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수
// 출력
// boolean 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(while)문을 사용해야 합니다.
// for문 사용은 금지됩니다.
// 나눗셈(/), 나머지(%) 연산자 사용은 금지됩니다.
// 0은 짝수로 간주합니다.

function isOdd(num) {
    // TODO: 여기에 코드를 작성합니다.
    // -1에 num을 제곱하여 1이나오면 양수 ***
    let i =0;
    while(i < 1){
      i += 1;
      if(Math.pow(-1, num) !== 1){
        return true;
      } else {
        return false;
      }
    }
  }
  