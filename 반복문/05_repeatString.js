// repeatString
// 문제
// 문자열과 수를 입력받아 반복된 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 문자열
// 인자 2 : num
// number 타입의 정수 (num >= 0)
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// 0을 입력받은 경우, 빈 문자열을 리턴해야 합니다.


function repeatString(str, num) {
    // TODO: 여기에 코드를 작성합니다.
    let result='';
    for(let i=0;i<num;i++){
      
      result += str;
      
    }
    return result;
  }
  