// getLengthOfLongestElement
// 문제
// 문자열을 요소로 갖는 배열을 입력받아 배열에서 가장 긴 문자열의 길이를 리턴해야 합니다.

// 입력
// 인자 1 : arr
// string 타입을 요소로 갖는 배열
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 빈 배열을 입력받은 경우, 0을 리턴해야 합니다.
// 입출력 예시
// let output = getLengthOfLongestElement(['one', 'two', 'three']);
// console.log(output); // --> 5

function getLengthOfLongestElement(arr) {
    // 여기에 코드를 입력하세요
     
     result = arr.reduce(function(acc, cur){
        if(acc.length>=cur.length){
          return acc;
        } else {
          return cur;
        }
      },'')
      return result.length;
  }
  