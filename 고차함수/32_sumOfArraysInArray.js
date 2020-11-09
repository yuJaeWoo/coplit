// sumOfArraysInArray
// 문제
// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 모든 수(number)의 합을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 배열을 요소로 갖는 배열
// arr[i]는 임의의 타입을 요소로 갖는 배열
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 합을 구할 때 number 타입만 고려해야 합니다.
// 입출력 예시
// let output = sumOfArraysInArray([
//   [1, 2],
//   [undefined, 4, '5'],
//   [9, 'hello'],
// ]);
// console.log(output); // --> 16
// 힌트
// 문제를 한 번에 해결하지 말고, 나누어 봅니다.
// 2차원 배열을 1차원으로 만들 경우, 문제가 더 쉬워집니다.
// 1차원 배열에서 number 타입의 요소만 취할 경우, 문제가 더 쉬워집니다.

function sumOfArraysInArray(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let sum = arr.reduce(function(a,b){
      return a.concat(b);
    });
    const resultS = sum.filter(function(a){
       return typeof a === 'number';
    });
    
    return resultS.reduce(function (a, b) {
      return a + b;
    },0);
  
  }