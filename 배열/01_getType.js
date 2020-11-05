// getType
// 문제
// 임의의 값을 입력받아 타입을 리턴해야 합니다.

// 입력
// 인자 1 : anything
// 임의의 값
// 출력
// string 타입을 리턴해야 합니다.
// ex) 'string', 'number', 'boolean', 'object', 'array', 'undefined', 'null', 'function'
// 주의 사항
// 자바스크립트에서 array, null 타입은 존재하지 않지만, 이 둘을 구분하여 출력합니다.
// 입출력 예시
// let output = getType('hello');
// console.log(output); // --> 'string'

// output = getType(10);
// console.log(output); // --> 'number'

// output = getType(true);
// console.log(output); // --> 'boolean'

// output = getType({ name: 'Steve' });
// console.log(output); // --> 'object'

// output = getType([100, 200, 300]);
// console.log(output); // --> 'array'
// 힌트
// 자바스크립트에서 타입을 확인하는 방법을 검색해 봅니다. how to typecheck in 자바스크립트
// 배열의 타입을 확인하면 "object" 입니다. 배열을 따로 구분할 수 있는 방법을 검색해 봅니다. how to tell if an object is an array in 자바스크립트

function getType(anything) {
    // TODO: 여기에 코드를 작성합니다.
    if(anything === null){
      return 'null';
    }if(Array.isArray(anything)){
      return 'array';
    } else {
      return String(typeof(anything));
    }
    }
  
  
    