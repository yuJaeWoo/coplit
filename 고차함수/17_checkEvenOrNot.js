// checkEvenOrNot
// 문제
// 수를 요소로 갖는 배열을 입력받아 각 요소가 2의 배수인지에 대한 정보를 요소로 갖는 새로운 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// arr[i]는 0 이상의 정수
// 출력
// 새로운 배열을 리턴해야 합니다.
// arr[i]이 2의 배수일 경우, 새로운 배열의 i번째 요소는 'ok'
// arr[i]이 2의 배수가 아닐 경우, 새로운 배열의 i번째 요소는 'no'
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 반드시 arr.map를 이용해서 풀어야 합니다.
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
// 0은 2의 배수가 아니라고 가정합니다.
// 입출력 예시
// let output = checkEvenOrNot([1, 2, 3, 4]);
// console.log(output); // --> ['no', 'ok', 'no', 'ok']

// checkEvenOrNot([0, 3, 4]);
// console.log(output); // --> ['no', 'no', 'ok']

function checkEvenOrNot(arr) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.map(function(a){
      if(a%2===0 && a !== 0){
        return 'ok';
      } else {
        return 'no';
      }
    })
  }
  