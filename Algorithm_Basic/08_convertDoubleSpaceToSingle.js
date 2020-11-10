// convertDoubleSpaceToSingle
// 문제
// 문자열을 입력받아 해당 문자열에 등장하는 두 칸의 공백을 모두 한 칸의 공백으로 바꾼 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 문자열
// 출력
// string 타입의 문자열
// 주의 사항
// 두 칸 이상의 공백은 존재하지 않는다고 가정합니다.
// 입출력 예시
// let output = convertDoubleSpaceToSingle('string  with  double  spaces');
// console.log(output); // --> "string with double spaces"

function convertDoubleSpaceToSingle(str) {
    let result = ''; //문자열을 순회하며 옳은 값만 누적시킬 변수
    let before = ''; // 반복문을 순회하면서 그전 인덱스의 정보를 담아놓은 변수
    for (let i = 0; i < str.length; i++) {
      // 직전의 문자가 공백이고, 현재의 문자도 공백인 경우
      // 즉, 현재의 문자가 두 번째 공백인 경우(에만), 무시한다.
      if (before !== ' ' || str[i] !== ' ') {
        result = result + str[i];
      }
      before = str[i];
    }
    return result;
  }