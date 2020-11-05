// printObject
// 문제
// 객체를 입력받아 키, 값 쌍을 표현하는 문자열을 리턴해야 합니다.
// 각 문자열은 한 줄에 키: 값 형태로 구성되며, 각 문자열 끝에는 줄바꿈 문자가 포함되어야 합니다.

// 입력
// 인자 1 : obj
// 임의의 속성을 갖는 객체
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 콜론 다음에 공백을 포함해야 합니다.
// 각 문자열 끝에 줄바꿈 문자를 포함해야 합니다.
// 입출력 예시
// const obj = { name: 'Steve', age: 13, gender: 'Male' };
// let output = printObject(obj);
// console.log(output); // -->
// /*
// name: Steve
// age: 13
// gender: Male
// */
// 힌트
// 줄바꿈 문자는 \n로 표현됩니다. hello\nworld\n 의 출력은 다음과 같습니다.
// hello
// world

function printObject(obj) {
    let result = '';
    let prop = {};
    for (prop in obj) {
      result += prop + ': ' + obj[prop] + '\n';
    }
    return result;
  }