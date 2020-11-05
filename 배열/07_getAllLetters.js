// getAllLetters
// 문제
// 문자열을 입력받아 문자열을 구성하는 각 문자를 요소로 갖는 배열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 공백이 없는 문자열
// 출력
// 배열을 리턴해야 합니다.
// 주의 사항
// str.split 사용은 금지됩니다.
// 빈 문자열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
// 입출력 예시
// let output = getAllLetters('Radagast');
// console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']

function getAllLetters(str) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [];
    let notResult = [];
    if(str === ''){
      return notResult;
    } else {
      for(let i =0; i< str.length;i++){
        result.push(str[i]);
      }
      return result;
    }
  }
  