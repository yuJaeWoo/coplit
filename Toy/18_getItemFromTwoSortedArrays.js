// getItemFromTwoSortedArrays
// 문제
// 길이가 m, n이고 오름차순으로 정렬되어 있는 자연수 배열들을 입력받아 전체 요소 중 k번째 요소를 리턴해야 합니다.
//
//     입력
// 인자 1 : arr1
// 자연수를 요소로 갖는 배열
// arr1.length는 m
// 인자 2 : arr2
// 자연수를 요소로 갖는 배열
// arr2.length는 n
// 인자 3 : k
// number 타입의 0 이상의 정수
// 출력
// number 타입을 리턴해야 합니다.
//     주의사항
// 두 배열의 길이의 합은 1,000,000 이하입니다.
//     어떤 배열 arr의 k번째 요소는 arr[k-1]을 의미합니다.
//     입출력 예시
// let arr1 = [1, 4, 8, 10];
// let arr2 = [2, 3, 5, 9];
// let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
// console.log(result); // --> 8
//
// arr1 = [1, 1, 2, 10];
// arr2 = [3, 3];
// result = getItemFromTwoSortedArrays(arr1, arr2, 4);
// console.log(result); // --> 3
// Advanced
// 단순히 처음부터 끝까지 찾아보는 방법(O(K)) 대신 다른 방법(O(logK))을 탐구해 보세요.
//     힌트
// 이진 탐색(binary search)을 응용하여 해결합니다.


const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  let leftIdx = 0,
      rightIdx = 0;

  while (k > 0) {
    let cnt = Math.ceil(k / 2);
    let leftStep = cnt,
        rightStep = cnt;

    if (leftIdx === arr1.length) {
      rightIdx = rightIdx + k;
      break;
    }

    if (rightIdx === arr2.length) {
      leftIdx = leftIdx + k;
      break;
    }

    if (cnt > arr1.length - leftIdx) leftIdxStep = arr1.length - leftIdx;
    if (cnt > arr2.length - rightIdx) rightStep = arr2.length - rightIdx;

    if (arr1[leftIdx + leftStep - 1] < arr2[rightIdx + rightStep - 1]) {
      leftIdx = leftIdx + leftStep;
      k = k - leftStep;
    } else {
      rightIdx = rightIdx + rightStep;
      k = k - rightStep;
    }
  }

  leftMax = arr1[leftIdx - 1] || -1;
  rightMax = arr2[rightIdx - 1] || -1;

  return Math.max(leftMax, rightMax);

};
