// countNumberOfKeys
// 문제
// 객체를 입력받아 속성의 개수를 리턴해야 합니다.

// 입력
// 인자 1 : obj
// 임의의 속성을 갖는 객체
// 출력
// number타입을 리턴해야 합니다.
// 입출력 예시
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

let output = countNumberOfKeys(obj);
console.log(output); // --> 3

function countNumberOfKeys(obj) {
    let result =0;
    result = Object.keys(obj).length;
    return result;
     }