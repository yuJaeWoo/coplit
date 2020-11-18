// arrSum
// 문제
// 배열을 입력받아 모든 요소의 합을 리턴해야 합니다.
//
//     입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// 출력
// number 타입을 리턴해야 합니다.
//     arr[0] + arr[1] + ... + arr[n-1] (n === arr.length)
// 주의 사항
// 함수 arrSum은 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
//     입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
//     입력으로 들어오는 arr의 모든 요소는 정수 값을 갖는다고 가정합니다.
//     빈 배열의 합은 0 입니다.
//     입출력 예시
// let output = arrSum([-1, -2, 1, 3]);
// console.log(output); // --> 1
// 힌트
// 배열은 head와 tail을 통해 재귀적으로 정의될 수 있습니다.
//     head는 배열의 첫 요소를 말합니다.
//     tail은 배열이 head가 제거되고 남은 배열을 말합니다.
// =>
// 1 => 1 +
// 1, 2 => 1 + 2
// 1, 2, 3 => 1 + 2, 3
// 3번의 [2]는 2번에 의해서 2 + [ ]로 정의되고, 따라서 [1, 2]는 최종적으로 1 + 2 + [ ] 로 정의될 수 있습니다.
//     같은 방식으로 4번을 정의해보세요.
//     길이가 1 이상인 배열 arr이 주어졌을 때 head와 tail은 각각 다음과 같이 구할 수 있습니다.
//     const head = arr[0];
// const tail = arr.slice(1);
// arrSum(arr)은 arr의 head에 arrSum(tail)을 더하는 방식으로 구할 수 있습니다.

//debugger;
function arrSum(arr) {
  let count =arr.length
  let head = arr[0];
  if(arr.length === 0){
    return 0
  }
  count -= 1;
  return head + arrSum(arr.slice(arr.length-count))
}
//count가 점점 내려가며 수를 계산
//const tail += arr.slice(1);
//




