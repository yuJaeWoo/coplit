// makeMarginalString
// 문제
// 문자열을 입력받아 해당 문자열을 처음부터 한 글자(letter)씩 다시 작성하려고 합니다. 이 때,
// 한 글자를 추가할 때마다 부분적으로 완성된 문자열을 전부 이어붙인 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 문자열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 이중 반복문(double for loop)을 사용해야 합니다.
// str.slice, str.substr, str.substring 사용은 금지됩니다.
// 빈 문자열을 입력받은 경우에는 빈 문자열을 리턴해야 합니다.

function makeMarginalString(str) {
    // TODO: 여기에 코드를 작성합니다.
    let result = '';
    let i =0;
    let j = 0;
      for(i=0;i<(str.length);i++){
        //비어있는 result에 첫번째 for문에서 첫글자를 따옴(str의 한글자 씩)
        for(j=0;j<=i;j++)
        // j가 i와 같아질때 까지 증감하며 str의 j인덱스를 result에 누적하여 저장
        result += str[j]
      }
     return result;
  }
  