// getLastElementOfProperty
// 문제
// 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 마지막 요소를 리턴해야 합니다.

// 입력
// 인자 1 : obj
// 임의의 속성을 갖는 객체
// 인자 2 : property
// string 타입의 키
// 출력
// 배열의 요소를 리턴해야 합니다.
// 주의 사항
// 주어진 키에 해당하는 값이 배열이고, 빈 배열이 아닌 경우에만 배열의 요소를 리턴해야 합니다.
// 그 외의 경우, undefined를 리턴해야 합니다.
// 입출력 예시
// const obj = {
//   key: [1, 2, 5],
// };

// let output = getLastElementOfProperty(obj, 'key');
// console.log(output); // --> 5

function getLastElementOfProperty(obj, property) {
    // TODO: 여기에 코드를 작성합니다.
    let prop = obj[property];
    if(Array.isArray(prop) && prop.length !== 0){
      return prop[prop.length-1];
    }
  }
  