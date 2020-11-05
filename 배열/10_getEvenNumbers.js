// getEvenNumbers
// 문제
// 수를 요소로 갖는 배열을 입력받아 짝수만을 요소로 갖는 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// arr[i]는 양의 정수
// 출력
// 배열을 리턴해야 합니다.
// 주의 사항
// 짝수가 없는 경우, 빈 배열을 리턴해야 합니다.
// 입출력 예시
// let output = getEvenNumbers([1, 2, 3, 4]);
// console.log(output); // --> [2, 4]

function getEvenNumbers(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let nonResult = [];
    let result = [];
    for(let i =0; i < arr.length;i++){
      if(arr[i]%2 === 0){
        result.push(arr[i]);
      } 
    }
    return result;
  }
  