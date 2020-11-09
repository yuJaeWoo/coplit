// joinArrayOfArrays
// 문제
// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 배열들의 요소를 모두 담고 있는 단일 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 임의의 요소를 갖는 배열
// 출력
// 배열의 모든 요소들을 깊이 1 까지 단일 배열로 이어붙인 배열을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// arr.flat 사용은 금지됩니다.
// 입출력 예시
// let output = joinArrayOfArrays([
//   [1, 4],
//   [true, false],
//   ['x', 'y'],
// ]);

// console.log(output); // --> [1, 4, true, false, 'x', 'y']

function joinArrayOfArrays(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let sum = [];
    return sum = arr.reduce(function(a,b){
      return sum.concat(a,b);
    })
  }
  