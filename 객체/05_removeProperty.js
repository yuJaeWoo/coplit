// removeProperty
// 문제
// 객체와 키를 입력받아 키가 가르키는 속성(property)을 제거해야 합니다.

// 입력
// 인자 1 : obj
// 임의의 속성을 갖는 객체
// 인자 2 : property
// string 타입의 키
// 출력
// 별도의 리턴문(return statement)을 작성하지 않습니다.
// 입출력 예시
// const obj = {
//   name: 'Sam',
//   age: 20,
// };

// removeProperty(obj, 'name');
// console.log(obj.name); // --> undefined

function removeProperty(obj, property) {
    // TODO: 여기에 코드를 작성합니다.
    delete obj[property];
  }
  