// removeNumberValues
// 문제
// 객체를 입력받아 number 타입의 값을 갖는 속성을 모두 제거해야 합니다.

// 입력
// 인자 1 : obj
// 임의의 속성을 갖는 객체
// 출력
// 별도의 리턴문(return statement)을 작성하지 않습니다.
// 입출력 예시
// const obj = {
//   a: 2,
//   b: 'remaining',
//   c: 4,
// };

// removeNumberValues(obj);
// console.log(obj); // --> { b: 'remaining' }
// 힌트
// 자바스크립트에서 object를 순회하는 방법을 검색해 봅니다.
// (js how to iterate object) for...in 외에 object 순회를 할 수 있는 방법이 있을까요?

function removeNumberValues(obj) {
    // TODO: 여기에 코드를 작성합니다.
   for(let prop in obj){
     if(typeof obj[prop]==='number'){
       delete obj[prop];
     }
   }
  }
  