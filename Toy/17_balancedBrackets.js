// balancedBrackets
// 문제
// 문자열을 입력받아 문자열 내의 모든 괄호의 짝이 맞는지 여부를 리턴해야 합니다.
//
//     다음 단계에 맞춰 함수를 작성해 보세요
// 괄호의 종류를 단 한가지로 한정합니다.
//     괄호의 종류를 늘려 모든 종류의 괄호에도 작동하도록 합니다.
//     괄호를 제외한 문자열이 포함된 경우에도 작동하도록 합니다.
//     입력
// 인자 1 : str
// string 타입의 괄호가 포함된 문자열
// 출력
// boolean 타입을 리턴해야 합니다.
//     주의사항
// 괄호의 종류는 (, )만 고려합니다.
//     괄호는 먼저 열리고((), 열린만큼만 닫혀야()) 합니다.
//     빈 문자열을 입력받은 경우, true를 리턴해야 합니다.
//     입출력 예시
// let output = balancedBrackets('(');
// console.log(output); // // -> false
//
// output = balancedBrackets('()');
// console.log(output); // --> true
// Advanced
// 모든 종류의 괄호((, ), {, }, [, ])가 포함된 문자열을 입력빋아 모든 괄호의 짝이 맞는지 여부를 리턴해 보세요.
//     let output = balancedBrackets('[](){}');
// console.log(output); // --> true
//
// output = balancedBrackets('[({})]');
// console.log(output); // --> true
//
// let output3 = balancedBrackets('[(]{)}');
// console.log(output); // --> false

const balancedBrackets = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let stack = {};
  let size = 0;
  let beginners = ['(', '[', '{'];
  let enders = [')', ']', '}'];
  for(let i = 0; i < str.length; i++){
    if( beginners.indexOf(str[i]) !== -1 ){ //시작 브라켓의 str[i]가 있다면
      stack[size] = str[i];
      size++;
    } else if( enders.indexOf(str[i]) !== -1 ){ //종료 브라켓의 str[i]가 있다면
      if(size === 0) { return false; }
      let index = enders.indexOf(str[i]);
      if(stack[size-1] === beginners[index] ){
        size --;
      } else {
        return false;
      }
    }
  }

  return size === 0;
};

