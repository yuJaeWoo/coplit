// LPS
// 문제
// 문자열을 입력받아 다음의 조건을 만족하는 LPS*를 찾아 그 길이를 리턴해야 합니다.
//
//     LPS: 주어진 문자열의 가장 긴 접두어이자 접미어(Longest Prefix which is also Suffix)
// non-overlapping: 접두어와 접미어는 서로 겹치는 부분이 없어야 합니다. 다시 말해, prefix와 suffix는 문자열의 동일한 인덱스에 위치한 문자를 요소로 가지면 안 됩니다.
//     입력
// 인자 1 : str
// string 타입의 임의의 알파벳 소문자 문자열 (
//     str.length는 60,000 이하
// 출력
// number 타입을 리턴해야 합니다.
//     주의사항
// prefix(접두어)는 문자열의 첫 인덱스부터 시작하는 모든 부분 문자열을 의미합니다.
// suffix(접미어)는 문자열의 마지막 인덱스부터 시작하는 모든 부분 문자열을 의미합니다.
//     입출력 예시
// let output = LPS('abbbcc');
// console.log(output); // --> 0
//
// output = LPS('aaaa');
// console.log(output); // --> 2
// // prefix: str.slice(0, 2)
// // suffix: str.slice(2)
// // non-overlapping 조건이 없는 경우 정답은 4 입니다.
//
// output = LPS('aaaaa');
// console.log(output); // --> 2
// // prefix: str.slice(0, 2)
// // suffix: str.slice(3)
// // non-overlapping 조건이 없는 경우 정답은 5 입니다.
// Advanced
// LPS를 계산하는 효율적인 알고리즘(O(N))이 존재합니다. 쉽지 않기 때문에 바로 레퍼런스 코드를 보고 이해하는 데 집중하시기 바랍니다.
// 정규식(regular expression)을 활용하면 아래처럼 간단하게 구현할 수 있습니다. 정규식에 대해서 학습하시기 바랍니다. (참고사이트)
// const LPS = (str) => {
//   const result = str.match(/^(\w*).*\1$/);
//   return result[1].length;
// };

const LPS = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  if (str.length < 2) return 0;

  // 문자열을 두 부분으로 나누고
  // 각 부분의 첫 인덱스를 저장
  let leftIdx = 0;
  // 문자열의 길이가 홀수일 수 있으므로, 올림한다.
  let rightIdx = Math.ceil(str.length / 2);

  while (rightIdx < str.length) {
    // LPS 검사를 시작한 위치부터 지금까지 계속 같은 경우
    // 다음 문자도 같은지 확인하기 위해 인덱스를 이동한다.
    if (str[leftIdx] == str[rightIdx]) {
      leftIdx++;
      rightIdx++;
    } else if (leftIdx == 0) {
      // 아직 LPS를 찾지 못한 경우
      // 다음 길이(더 짧은 길이)의 LPS를 검사한디
      // 테스트 케이스 예: 'aaabbccaaaab'
      rightIdx++;
    } else {
      // leftIdx가 j이고 rightIdx가 k라 가정
      // j, k > 0 이고, j <= k
      // 최소 길이 j의 LPS를 찾은 상황
      // 아래와 같은 경우 처음부터 다시 LPS를 찾을 필요가 없다.
      // 왼쪽 부분이 'aaab...'이고, 오른쪽 부분이 'aaaa...'인 경우,
      // 첫 불일치가 발생한 상황(leftIdx, rightIdx 모두 3)에서
      // 첫 세 개의 a를 재활용할 수 있다.
      // 테스트 케이스 예: 'aaabbcaaaaab'
      leftIdx--;
    }
  }

  // LPS가 없는 경우
  return leftIdx;
};

