// getFullNames
// 문제
// 개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 이름 전체를 요소로 갖는 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 객체를 요소로 갖는 배열
// arr[i]는 'firstName', 'lastName' 속성을 갖는 객체
// 'firstName', 'lastName' 속성은 string 타입
// 출력
// string 타입을 요소로 갖는 배열을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 이름 전체는 'firstName', 'lastName' 속성값 사이에 띄어쓰기 하나를 둔 문자열입니다.
// 'firstName', 'lastName' 속성값 사이에 띄어쓰기 하나를 추가해야 합니다.
// 빈 배열이 주어진 경우에는 빈 배열을 리턴해야 합니다.
// 입출력 예시
// let output = getFullNames([
//   {
//     firstName: 'Tim',
//     lastName: 'Goldfish',
//   },
// ]);
// console.log(output); // --> ['Tim Goldfish']

// output = getFullNames([
//   {
//     firstName: 'Adam',
//     lastName: 'Smith',
//   },
//   {
//     firstName: 'Jack',
//     lastName: 'Black',
//   },
//   {
//     firstName: 'Samuel',
//     lastName: 'Jackson',
//   },
// ]);
// console.log(output); // --> ['Adam Smith', 'Jack Black', 'Samuel Jackson']

// output = getFullNames([]);
// console.log(output); // --> []

function getFullNames(arr) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.map(function(a){
      return a.firstName+' '+a.lastName;
    })
  }
  