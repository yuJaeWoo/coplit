// getLengthOfElements
// 문제
// 문자열을 요소로 갖는 배열을 입력받아 각 요소의 길이를 요소로 갖는 새로운 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// string 타입을 요소로 갖는 배열
// 출력
// 새로운 배열을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 반드시 arr.map를 이용해서 풀어야 합니다.
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
// 입출력 예시
// let output = getLengthOfElements(['', 'a', 'ab', 'abc']);
// console.log(output); // --> [0, 1, 2, 3]

// getLengthOfElements(['hello', 'code', 'states']);
// console.log(output); // --> [5, 4, 6]


function getLengthOfElements(arr) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.map(function(a){
      return a = a.length;
    })
  }
  