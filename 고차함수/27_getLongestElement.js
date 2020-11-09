// getLongestElement
// 문제
// 문자열을 요소로 갖는 배열을 입력받아 배열에서 가장 긴 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// string 타입을 요소로 갖는 배열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 가장 긴 문자열이 중복이 될 경우, 앞 쪽에 있는 요소를 리턴해야 합니다.
// 빈 배열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 입출력 예시
// let output = getLongestElement(['one', 'two', 'three']);
// console.log(output); // --> 'three'

// output = getLongestElement(['one', 'two', 'wow']);
// console.log(output); // --> 'one'

function getLongestElement(arr) {
    // TODO: 여기에 코드를 작성합니다.
      let result = '';
      result = arr.reduce(function(acc, cur){
        if(acc.length>=cur.length){
          return acc;
        } else {
          return cur;
        }
      },'')
      return result;
    
  }
  