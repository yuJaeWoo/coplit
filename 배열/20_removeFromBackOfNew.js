// removeFromBackOfNew
// 문제
// 배열을 입력받아 배열의 마지막 요소가 제외된 새로운 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 임의의 요소가 담긴 배열
// 출력
// 새로운 배열(주소값 다름)을 리턴해야 합니다.
// 주의 사항
// 입력받은 배열을 수정하지 않아야 합니다(immutability).
// 입출력 예시
// let arr = [1, 2, 3];
// let output = removeFromBackOfNew(arr);
// console.log(output); // --> [1, 2]
// console.log(arr); // --> [1, 2, 3]
// 힌트
// mdn array slice를 검색해보세요.
// 불변성(immutability)에 대해서 검색해 봅니다. (immutabiliy in javascript 또는 자바스크립트 불변성)

function removeFromBackOfNew(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let newA = [];
    //0번째부터(포함) arr의 마지막값(길이-1)
    newA=(arr.slice(0,arr.length-1));
    return newA;
  }
  
  