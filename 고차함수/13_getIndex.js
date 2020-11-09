// getIndex
// 문제
// 정수를 요소로 갖는 배열과 정수(num)를 입력받아 num을 배열에 추가하고 정렬한다고 가정할 경우, num의 인덱스를 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// arr[i]는 0 이상의 정수
// 인자 2 : num
// number 타입의 정수 (num >= 0)
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// arr.sort, arr.indexOf 사용은 금지됩니다.
// 빈 배열을 입력받은 경우, 0을 리턴해야 합니다.
// num은 arr의 어떤 요소와도 같지 않다고 가정합니다.
// 입출력 예시
// let output = getIndex([5, 4, 1, 3], 2);
// console.log(output); // --> 1

// output = getIndex([10, 5, 1, 3], 13);
// console.log(output); // --> 4

function getIndex(arr, num) {
    return arr.filter(function (el) {
      return el < num;
    }).length;
  }