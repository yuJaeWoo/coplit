// addToFrontOfNew
// 문제
// 배열과 요소를 입력받아 맨앞에 새로운 요소가 추가된 새로운 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 임의의 요소가 담긴 배열
// 인자 2 : el
// 임의의 값인 요소
// 출력
// 새로운 배열(주소값 다름)을 리턴해야 합니다.
// 주의 사항
// 입력받은 배열을 수정하지 않아야 합니다(immutability).
// 입출력 예시
// let input = [1, 2];
// let output = addToFrontOfNew(input, 3);
// console.log(output); --> [3, 1, 2];
// console.log(input); --> [1, 2]

function addToFrontOfNew(arr, el) {
    // TODO: 여기에 코드를 작성합니다.
  
     let newA = [];
    
    newA=(arr.slice());
    newA.unshift(el);
    return newA;
  }
  
  
  