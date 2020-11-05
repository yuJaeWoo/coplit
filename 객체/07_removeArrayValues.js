// removeArrayValues
// 문제
// 객체를 입력받아 배열을 값으로 갖는 속성을 모두 제거해야 합니다.

// 입력
// 인자 1 : obj
// 임의의 속성을 갖는 객체
// 출력
// 별도의 리턴문(return statement)을 작성하지 않습니다.
// 입출력 예시
// const obj = {
//   a: [1, 3, 4],
//   b: 2,
//   c: ['hi', 'there'],
// };

// removeArrayValues(obj);
// console.log(obj); // --> { b: 2 }

function removeArrayValues(obj) {
    // TODO: 여기에 코드를 작성합니다.
    for(let keys in obj){
      if(Array.isArray(obj[keys])){
        delete obj[keys];
      }
    }
  }
  