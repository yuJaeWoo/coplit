// getAllElementsButFirst
// 문제
// 배열을 입력받아 배열의 첫번째 요소를 제외한 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 임의의 요소를 가진 배열
// 출력
// 배열의 첫번째 요소를 제외한 배열을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
// 입출력 예시
// let input = [1, 2, 3, 4];
// let output = getAllElementsButFirst(input);
// console.log(output); // --> [2, 3, 4]

function getAllElementsButFirst(arr) {
    // TODO: 여기에 코드를 작성합니다.
   arr.shift(0);
   return arr;
  }
  