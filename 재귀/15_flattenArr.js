// flattenArr
// 문제
// 다차원 배열을 입력받아 1차원 배열로 변환하여 리턴해야 합니다.
//
//     입력
// 인자 1 : arr
// 양의 정수 또는 배열을 요소로 갖는 다차원 배열 (입출력 예시 참고)
// 출력
// 배열을 리턴해야 합니다.
//     주의 사항
// 함수 flattenArr는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용이 가능합니다.
//     입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
//     입력으로 전달되는 다차원 배열이 중첩된 정도(중첩의 깊이)는 정해져 있지 않습니다.
//     빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
//     입출력 예시
// let output = flattenArr([[1], 2, [3, 4], 5]);
// console.log(output); // --> [1, 2, 3, 4, 5]
//
// output = flattenArr([[2, [[3]]], 4, [[[5]]]);
// console.log(output); // --> [2, 3, 4, 5]

function flattenArr(arr) {
  //재귀함수의 입력값과 출력값 정의
  // -> 다차원 배열 -> flattenArr(다차원 배열) -> 1차원 배열
  // TODO: 여기에 코드를 작성합니다.
  //문제를 쪼개고 경우의 수 나누기
  //if(Array.isArray(arr[i])){참일 경우에는 똑같은 작업(재귀)사용}

  //쪼갤수 없는 문제 -> 모든 요소들이 하나의 배열에 들어가있다.
  //base case
  //-> arr.length === 0 -> return arr;
  //복잡한 문제 해결하기
  //-> result라는 배열을 만들어서 거기에 push
  let result = [];
  let smallBox = [];

  for(let i =0; i<arr.length;i++){
    if(!Array.isArray(arr[i])){
      result.push(arr[i]);
    }else{
      smallBox = flattenArr(arr[i]);
      for(let j =0;j<smallBox.length;j++){
        result.push(smallBox[j]);
      }
    }
  }
  return result;
}
