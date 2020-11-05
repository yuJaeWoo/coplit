// getAllElementsButNth
// 문제
// 배열과 인덱스를 입력받아 해당 인덱스의 요소를 제외한 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 임의의 요소가 담긴 배열
// 인자 2 : n
// number 타입의 인덱스
// 출력
// 인덱스에 해당하는 요소를 제외한 배열을 리턴해야 합니다.
// 주의 사항
// 배열의 길이보다 큰 인덱스를 입력받은 경우, 배열 그대로를 리턴해야 합니다.
// 입출력 예시
// let output = getAllElementsButNth(['a', 'b', 'c'], 1);
// console.log(output); // --> ['a', 'c']

function getAllElementsButNth(arr, n) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i !== n) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }