// getElementsAfter
// 문제
// 배열과 인덱스를 입력받아 주어진 인덱스 이후의 요소들을 갖는 새로운 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 임의의 요소를 갖는 배열
// 인자 2 : n
// number 타입의 인덱스 (0 이상의 정수)
// 출력
// n번 인덱스 이후의 새로운 배열을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
// 배열의 길이 이상의 인덱스를 입력받은 경우, 빈 배열을 리턴해야 합니다.
// 입출력 예시
// let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
// console.log(output); // --> ['d', 'e']
// 힌트
// str.slice와 비슷하게 배열 중 차례대로 일부의 요소를 취하는 것은 배열을 자르는(slice) 것과 같습니다.

function getElementsAfter(arr, n) {
    if (n >= arr.length) {
      return [];
    }
  
    return arr.slice(n + 1);
  }