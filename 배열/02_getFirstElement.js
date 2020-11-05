// getFirstElement
// 문제
// 배열을 입력받아 배열의 첫번째 요소를 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 임의의 요소를 갖는 배열 (arr.length >= 0)
// 출력
// 배열의 요소를 리턴해야 합니다.
// 주의 사항
// 빈 배열을 입력받은 경우, undefined를 리턴해야 합니다.
// 입출력 예시
// let output = getFirstElement([1, 2, 3, 4, 5]);
// console.log(output); // --> 1

function getFirstElement(arr) {
    // TODO: 여기에 코드를 작성합니다.
    if(arr === undefined){
      return undefined;
    }else {
      return arr[0];
    }
  }
  