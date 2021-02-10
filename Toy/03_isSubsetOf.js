// isSubsetOf
// 문제
// 두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴해야 합니다.
//
//     입력
// 인자 1 : base
// number 타입을 요소로 갖는 임의의 배열
// base.length는 100 이하
// 인자 2 : sample
// number 타입을 요소로 갖는 임의의 배열
// sample.length는 100 이하
// 출력
// boolean 타입을 리턴해야 합니다.
//     주의사항
// base, sample 내에 중복되는 요소는 없다고 가정합니다.
//     입출력 예시
// let base = [1, 2, 3, 4, 5];
// let sample = [1, 3];
// let output = isSubsetOf(base, sample);
// console.log(output); // --> true
//
// sample = [6, 7];
// output = isSubsetOf(base, sample);
// console.log(output); // --> false
//
// base = [10, 99, 123, 7];
// sample = [11, 100, 99, 123];
// output = isSubsetOf(base, sample);
// console.log(output); // --> false
// Advanced
// 시간 복잡도를 개선하여, Advanced 테스트 케이스(base, sample의 길이가 70,000 이상)를 통과해 보세요.

// const isSubsetOf = function (base, sample) {
//   // TODO: 여기에 코드를 작성합니다.
//   let result = false;
//   let count = sample.length;
//   //sample을 돌면서 base의 값과 비교
//   //값이 같은게 나오면 base의 현재값까지의 앞의 수들은 검사할 필요가 없어짐(삭제)
//   base.sort(function(a, b) { // 오름차순
//     return a - b});
//   sample.sort(function(a, b) { // 오름차순
//     return a - b});

//   const leaderFunc(base, sample)
//   return result;
// };
const isSubsetOf = function (base, sample) {
  // naive solution: O(M * N)
  // return sample.every((item) => base.includes(item));

  // 각 배열을 정렬: O(N * logN), O(M * logM)
  // N >= M 이므로, O(N * logN)
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  const findItemInSortedArr = (item, arr, from) => {
    for (let i = from; i < arr.length; i++) {
      if (item === arr[i]) return i;
      else if (item < arr[i]) return -1;
    }
    return -1;
  };

  let baseIdx = 0;
  for (let i = 0; i < sample.length; i++) {
    baseIdx = findItemInSortedArr(sample[i], base, baseIdx);
    if (baseIdx === -1) return false;
  }
  return true;
};