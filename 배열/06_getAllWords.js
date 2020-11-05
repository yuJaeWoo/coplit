// getAllWords
// 문제
// 문자열을 입력받아 문자열을 구성하는 각 단어를 요소로 갖는 배열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 공백이 있는 문자열
// 출력
// 배열을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 단어는 공백 한 칸으로 구분합니다.
// 연속된 공백은 없다고 가정합니다.
// 입출력 예시
// let output = getAllWords('Radagast the Brown');
// console.log(output); // --> ['Radagast', 'the', 'Brown']

function getAllWords(str) {
    // TODO: 여기에 코드를 작성합니다.
  let result =[];
  let notResult=[];
  let str2 = [];
  if(str === ''){
    return notResult;
  } else {
  //str2는 배열로 인식
  str2 = str.split(' ');
  }
  return str2;
  
  }
  