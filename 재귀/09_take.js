// take
// 문제
// 수(num)와 배열을 입력받아 차례대로 num개의 요소만 포함된 새로운 배열을 리턴해야 합니다.
//
//     입력
// 인자 1 : num
// number 타입의 정수 (num >= 0)
// 인자 2 : arr
// 임의의 요소를 갖는 배열
// 출력
// 순차적으로 num 개의 요소로 구성된 배열을 리턴해야 합니다.
//     주의 사항
// 함수 take는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
//     입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
//     num과 arr.length 중 최대값만큼 저장합니다.
//     입출력 예시
// let output = take(2, [1, -2, 1, 3]);
// console.log(output); // --> [1, -2]
//
// output = take(5, [1, -2, 1, 3]);
// console.log(output); // --> [1, -2, 1, 3]

//debugger;
function take(num, arr) {
  let head = arr[0];
  // TODO: 여기에 코드를 작성합니다.
  //음수 인덱스는 배열의 끝에서부터의 길이를 나타냅니다. slice(-2) 는 배열에서 마지막 두 개의 엘리먼트를 추출합니다.
  let tail = arr.slice(1)
  if(num >= arr.length){
    return arr;
  }
  if(num === undefined || num === 0){
    return [];
  }

  //return take(num-1, tail);
  return [head].concat(take(num-1, tail)); //요소값에 괄호를 치면 배열의 값으로 인식.

}
// console.log(take(2, [1,2,3,4]));