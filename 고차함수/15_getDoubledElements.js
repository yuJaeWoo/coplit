// getDoubledElements
// 문제
// 수를 요소로 갖는 배열을 입력받아 각 요소를 2배 곱한 새로운 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// 출력
// 새로운 배열을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 반드시 arr.map를 이용해서 풀어야 합니다.
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
// 입출력 예시
// let output = getDoubledElements([1, 2, 3, 4]);
// console.log(output); // --> [2, 4, 6, 8]

function getDoubledElements(arr) {
    // TODO: 여기에 코드를 작성합니다.
   
   const abc = arr.map(a => a*2);
    return abc;
  }
  