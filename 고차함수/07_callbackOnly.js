// callbackOnly
// 문제
// 함수와 객체를 입력받아 조건별로 아래와 같은 동작을 수행해야 합니다.

// 객체의 'status' 속성값이 'fail'인 경우, 'Something went wrong!'을 리턴해야 합니다.
// 객체의 'status' 속성값이 'success'인 경우, 'data' 속성값에 입력받은 함수를 적용한 결과를 리턴해야 합니다.
// 입력
// 인자 1 : callback
// string 타입을 입력받아 임의의 타입을 리턴하는 함수
// 인자 2 : response
// 'status', 'data' 속성을 갖는 객체
// 'data' 속성값은 string 타입의 이메일 주소 (ex. 'codes@naver.com')
// 출력
// string 또는 입력받은 함수(callback)의 리턴 타입을 따릅니다.
// 입출력 예시
// function getDomain(email) {
//   return email.split('@')[1].split('.')[0];
// }

// function getUserId(email) {
//   return email.split('@')[0];
// }

// let output = callbackOnly(getDomain, {
//   status: 'success',
//   data: 'mike@codestates.com',
// });
// console.log(output); // --> codestate

// output = callbackOnly(getUserId, {
//   status: 'success',
//   data: 'mike@codestates.com',
// });
// console.log(output); // --> mike

// output = callbackOnly(getUserId, {
//   status: 'fail',
//   data: 'mike@codestates.com',
// });
// console.log(output); // --> 'Something went wrong!'

function callbackOnly(callback, response) {
    // TODO: 여기에 코드를 작성합니다.
    if(response['status'] === 'success'){
      return callback(response.data);
    }if(response['status'] === 'fail'){
      return 'Somthing went wrong!'
    }
  
  }
  