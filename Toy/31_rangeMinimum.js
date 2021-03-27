// rangeMinimum
// 문제
// 정수를 요소로 갖는 배열과 특정 구간을 입력받아, 해당 구간 내에서 최소값을 리턴해야 합니다.
//
//     입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// arr.length는 500,000 이하
// arr[i]는 -100,000 이상 100,000 이하의 정수
// 인자 2 : ranges
// number 타입을 요소로 갖는 배열
// ranges.length는 10,000 이하
// ranges[i]는 특정 구간을 의미
// ranges[i][0]은 i번째 구간의 시작 인덱스
// ranges[i][1]은 i번째 구간의 마지막 인덱스
// 출력
// 배열(arr)를 리턴해야 합니다. (입출력 예시 참고)
// arr[i]는 i번째 구간(ranges[i])의 최소값
// 입출력 예시
// const arr = [1, 3, 2, 7, 9, 11];
// const mins = rangeMinimum(arr, [
//   [1, 4],
//   [0, 3],
// ]);
// console.log(mins); // --> [2, 1]
// Advanced
// Advanced1: 주어진 배열에서 특정 구간의 최소값을 구하는 단순한 알고리즘은 단순 순회(O(N))입니다. 같은 배열에 대해서 다양한 구간에 대한 최소값을 구할 경우, 단순 순회는 O(N^2) 입니다(구간의 개수도 N개라 가정할 경우). 적절한 자료구조를 통해 이와 같은 구간 조회에 대한 반복 작업을 효율적(O(N * logN))으로 수행할 수 있습니다. 구간 트리(segment tree)에 대해서 학습하시고, Advanced 테스트 케이스를 통과해 보시기 바랍니다.
//     트리를 객체 또는 배열로 구현할 수 있습니다. 객체로 구현하는 것이 보다 직관적이기 때문에 객체로 먼저 도전하시기 바랍니다. 레퍼런스는 모두 주어집니다.
//     구간의 최대값, 합도 동일한 로직으로 구현하면 됩니다.

// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
  // TODO: 여기에 코드를 작성합니다.
  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  // TODO: 여기에 코드를 작성합니다.
  heap.push(item);
  if (heap.length > 1) {
    let curIdx = heap.length - 1;
    let pIdx = getParentIdx(curIdx);
    while (pIdx >= 0 && heap[curIdx] < heap[pIdx]) {
      swap(curIdx, pIdx, heap);
      curIdx = pIdx;
      pIdx = getParentIdx(curIdx);
    }
  }
  return heap;
}

function removeRoot(heap) {
  // TODO: 여기에 코드를 작성합니다.
  swap(0, heap.length - 1, heap);
  heap.pop();
  if (heap.length === 0) return [];

  let curIdx;
  let minIdx = 0;
  while (curIdx !== minIdx) {
    curIdx = minIdx;
    let left = curIdx * 2 + 1;
    let right = curIdx * 2 + 2;
    if (left < heap.length && heap[left] < heap[minIdx]) {
      minIdx = left;
    }

    if (right < heap.length && heap[right] < heap[minIdx]) {
      minIdx = right;
    }

    swap(curIdx, minIdx, heap);
  }

  return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

const heapSort = function (arr) {
  let minHeap = binaryHeap(arr);
  // TODO: 여기에 코드를 작성합니다.
  const sorted = [];
  while (minHeap.length > 0) {
    sorted.push(minHeap[0]);
    minHeap = removeRoot(minHeap);
  }
  return sorted;
};