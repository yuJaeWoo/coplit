// and
// 문제
// 배열을 입력받아 모든 요소의 논리곱(and)을 리턴해야 합니다.
//
//     입력
// 인자 1 : arr
// boolean 타입을 구성 요소로 갖는 배열
// 출력
// boolean 타입을 리턴해야 합니다.
//     arr[0] && arr[1] && ... && arr[n-1] (n === arr.length)
// 주의 사항
// 함수 and는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
//     입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
//     빈 배열의 논리곱은 true 입니다.
//     입출력 예시
// let output = and([true, true, true]);
// console.log(output); // --> true
//
// output = and([true, true, false]);
// console.log(output); // --> false

function and(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let head = arr[0]
  let tail = arr.slice(1);//전체배열
  if(arr.length === 0){
    return true;
  }

  return head && and(tail);
}

