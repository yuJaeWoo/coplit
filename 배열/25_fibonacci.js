// fibonacci
// 문제
// 수(num)를 입력받아 num번째까지 총 num + 1개의 피보나치 수열을 리턴해야 합니다.

// 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

// 입력
// 인자 1 : num
// number 타입의 num (num은 0 이상의 정수)
// 출력
// 배열을 리턴해야 합니다.
// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// 피보나치 수열은 0번부터 시작합니다.
// 입출력 예시
// let output = fibonacci(5);
// console.log(output[5]); // --> 5

// output = fibonacci(9)[9];
// console.log(output); // --> 34

function fibonacci(num) {
    // TODO: 여기에 코드를 작성합니다.
    let pNum = 1;
    let result = [0];
    for(let i =1; i<= num; i++){
      result.push(pNum);
      pNum = result[i-1] + result[i];
    }
    return result;
  }