// removeOddValues
// 문제
// 객체를 입력받아 홀수를 값으로 갖는 속성을 모두 제거해야 합니다.

// 입력
// 인자 1 : obj
// 임의의 속성을 갖는 객체
// 출력
// 별도의 리턴문(return statement)을 작성하지 않습니다.
// 주의 사항
// 홀수 판단은 number 타입에만 적용합니다.
// 입출력 예시
// const obj = {
//   a: 2,
//   b: 3,
//   c: 4,
// };

// removeOddValues(obj);
// console.log(obj); // --> { a: 2, c: 4 }

function removeOddValues(obj) {
    // TODO: 여기에 코드를 작성합니다.
    for(let keys in obj){
      if(obj[keys]%2 !== 0 && typeof obj[keys] === 'number'){
        delete obj[keys]
      }
    }
  }
  