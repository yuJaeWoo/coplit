// 함수의 실행(invocation; call)
// 변수에 함수가 담겨있다면, 다른 변수와는 다르게 () 괄호를 붙여서 함수를 실행할 수 있습니다. 
// 또한 입력값을 설정할 수도 있는데요, 이를 전달인자(argument), 줄여서 인자라고 부릅니다.

// let word = speakUp('hello world');
// 변수 word에 담겨있는 함수 speakUp에 문자열 'hello world'를 인자로 넣어 실행됩니다.

// 함수의 리턴(return)
// 함수가 실행되고 나면, 결과값을 리턴(return)합니다. 
// 이 결과 값은 함수의 중괄호 내부에서 어떤 값을 return하는지에 따라서 결정됩니다. 
// 아무것도 return하지 않으면 undefined를 리턴해야 합니다.

// function minusOne(input) {
//   input = input - 1;
//   return word;
// }
// let result = minusOne(10); // 9
// function functionWithoutReturn() {
//   console.log('I may return!');
// }
// let result = functionWithoutReturn(); // undefined
// 함수의 실행과 리턴에 유념하여 문제를 풀어보세요 !

// 문자열을 인자로 받아서 느낌표를 붙여서 리턴해주는 함수 returnWordWithJoy가 있습니다.
// 함수 returnWordWithJoy의 첫 번째 인자로 문자열 "I love coding"을 넣어서 실행하고, 그 결과값을 변수 word에 할당하세요.
let word = returnWordWithJoy('I love coding'); // TODO

function returnWordWithJoy(word) {
  if (typeof word !== 'string') {
    return 'wrong type';
  } else {
    return word + '!';
  }
}