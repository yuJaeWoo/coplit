// applyTwice
// 문제
// 함수와 수(num)를 입력받아 num에 함수를 두 번(twice) 적용(apply)한 결과를 리턴해야 합니다.

// 입력
// 인자 1 : func
// number 타입을 입력받아 number 타입을 리턴하는 함수
// 인자 2 : num
// number 타입의 정수 (num >= 0)
// 출력
// 주어진 함수의 리턴 타입을 따릅니다.
// 주의 사항
// 입력받은 함수가 어떤 일을 하는지는 중요하지 않습니다.
// 입출력 예시
// function square(num) {
//   return num * num;
// }

// let output = applyTwice(square, 2);
// console.log(output); // --> 16

// function add5(num) {
//   return num + 5;
// }

// output = applyTwice(add5, 3);
// console.log(output); // --> 13

function applyTwice(func, num) {
    // TODO: 여기에 코드를 작성합니다.
    
    return func(func(num));

  }
  function func(num) {
      return num*num;
  }
  