tiling
문제
세로 길이 2, 가로 길이 n인 2 x n 보드가 있습니다. 2 x 1 크기의 타일을 가지고 이 보드를 채우는 모든 경우의 수를 리턴해야 합니다.

입력
인자 1 : n
number 타입의 1 이상의 자연수
출력
number 타입을 리턴해야 합니다.
주의사항
타일을 가로, 세로 어느 방향으로 놓아도 상관없습니다. (입출력 예시 참고)
입출력 예시
let output = tiling(2);
console.log(output); // --> 2

output = tiling(4);
console.log(output); // --> 5
/*
2 x 4 보드에 타일을 놓는 방법은 5가지
각 타일을 a, b, c, d로 구분

2 | a b c d
1 | a b c d
------------

2 | a a c c
1 | b b d d
------------

2 | a b c c
1 | a b d d
------------

2 | a a c d
1 | b b c d
------------

2 | a b b d
1 | a c c d
------------
*/
Advanced
타일링 문제를 해결하는 효율적인 알고리즘(O(N))이 존재합니다. 반드시 직접 문제를 해결하시면서 입력의 크기에 따라 어떻게 달라지는지 혹은 어떻게 반복되는지 관찰하시기 바랍니다.

let tiling = function (n) {
    let arr = Array(n).fill(0)
    arr[0] = 1
    arr[1] = 2
    for(let i=2; i<n; i++){
        let a = arr[i-1] + arr[i-2]
        arr[i] = Math.abs(a);
    }
    return arr[n-1];
};
