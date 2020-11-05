// extend
// 문제
// 두 개의 객체를 입력받아 두번째 객체의 속성들을 첫번째 객체에 추가해야 합니다.

// 입력
// 인자 1 : obj1
// 임의의 속성을 갖는 객체
// 인자 2 : obj2
// 임의의 속성을 갖는 객체
// 출력
// 별도의 리턴문(return statement)을 작성하지 않습니다.
// 주의 사항
// 추가하려는 속성이 이미 첫번째 객체에 존재하는 경우, 기존 값을 그대로 둡니다.
// 두번째 객체는 수정하지 않아야 합니다.
// 입출력 예시
// const obj1 = {
//   a: 1,
//   b: 2,
// };

// const obj2 = {
//   b: 4,
//   c: 3,
// };

// extend(obj1, obj2);
// console.log(obj1); // --> {a: 1, b: 2, c: 3}
// console.log(obj2); // --> {b: 4, c: 3}

function extend(obj1, obj2) {
    //key라는 변수에 obj2의 속성을 넣음
     for (let key in obj2) {
       //만들어진 key를 obj1에 넣을때(비교) 동일 속성이 없을때
       if (!(key in obj1)) {
         //1의 속성에 키값을 삽입
         obj1[key] = obj2[key];
       }
     }
   }