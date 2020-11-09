// findShortestWord
// 문제
// 배열을 입력받아 배열에서 가장 짧은 길이를 가진 문자열 요소를 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 임의의 요소가 담긴 배열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 같은 길이의 요소가 있다면 배열의 앞쪽에 있는 요소를 리턴해야 합니다.
// 배열에는 문자열 외에 다른 요소들이 있을 수 있습니다.
// 빈 배열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 주어진 배열에 문자열이 없는 경우, 빈 문자열을 리턴해야 합니다.
// 입출력 예시
// let output = findShortestWord([4, 'two', 2, 'three']);
// console.log(output); // --> 'two'
// 힌트
// 문제를 한 번에 해결하지 말고, 나누어 봅니다.
// 문자열로만 구성된 배열을 입력받은 경우, 문제가 더 쉬워진다는 것에 주목합시다.

function findShortestWord(arr) {
    // TODO: 여기에 코드를 작성합니다.
    const result = arr.filter(function(a){
      return typeof a === 'string'
    })
    if (result.length === 0) {
      return '';
    }
   return result.reduce(function(a,b){
        if(a.length<=b.length){
          return a;
        } else {
          return b;
        }
      })
      
  }
  