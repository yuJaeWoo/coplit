// addObjectProperty
// 문제
// 두 개의 객체와 키를 입력받아 첫번째 객체의 키에 두번째 객체를 할당해야 합니다.

// 입력
// 인자 1 : obj1
// 임의의 속성을 갖는 객체
// 인자 2 : property
// string 타입의 키
// 인자 3 : obj2
// 임의의 속성을 갖는 객체
// 출력
// 별도의 리턴문(return statement)을 작성하지 않습니다.
// 입출력 예시
// const person1 = {
//   name: 'Joe',
//   role: 'Team Member',
// };

// const person2 = {
//   name: 'Steve',
//   role: 'CEO',
// };

// addObjectProperty(person1, 'manager', person2);
// console.log(person1.manager);
// /*
// {
//   name: 'Steve',
//   role: 'CEO'
// }
// */

// console.log(person1);
// /*
// {
//   name: 'Joe',
//   role: 'Team Member',
//   manager: {
//     name: 'Steve',
//     role: 'CEO'
//     }
//   }
// */

function addObjectProperty(obj1, property, obj2) {
    // 여기에 코드를 작성합니다
    obj1[property] = obj2
  }
  