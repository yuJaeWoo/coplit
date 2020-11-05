// dropLetters
// 문제
// 수(num)와 문자열을 입력받아 차례대로 num개의 문자가 제거된 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 0)
// 인자 2 : str
// 임의의 길이의 문자열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// num과 str.length 중 최초값만큼 제거(drop)합니다.

function dropLetters(num, str) {
    // TODO: 여기에 코드를 작성합니다.
    let result;
    result = str.slice(num);
    return result;
  }
  