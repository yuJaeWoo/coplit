// getLargestElement
// 문제
// 배열을 입력받아 가장 큰 요소를 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입의 정수로 구성된 배열
// 출력
// number 타입을 리턴해야 합니다.
// 입출력 예시
// let output = getLargestElement([1, 4, 3]);
// console.log(output); // --> 4

// output = getLargestElement([-4, -2, -9]);
// console.log(output); // --> -2


function getLargestElement(arr) {
    // TODO: 여기에 코드를 작성합니다.
    //sort를 사용하는 법을 익히자.
    arr.sort(function(a, b) {
    return b - a;});
  
  return arr[0];
  }
  