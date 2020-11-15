// superIncreasing
// 문제
// 수를 요소로 갖는 배열을 입력받아 각 요소들이 그 이전의 요소들의 합보다 큰지 여부를 리턴해야 합니다.
//
//     입력
// 인자 1 : arr
// 수를 요소로 갖는 배열
// arr[i]는 정수
// 출력
// boolean 타입을 리턴해야 합니다.
//     arr[i]는 arr[0]부터 arr[i-1]까지의 합보다 커야 합니다.
//     입출력 예시
// let output = superIncreasing([1, 3, 6, 13, 54]);
// console.log(output); // --> true
//
// output = superIncreasing([1, 3, 5, 9]);
// console.log(output); // --> false

function superIncreasing(arr) {
    // TODO: 여기에 코드를 작성합니다.
    //수로 이루어진 배열을 받아서
    //순회를 돌린다.
    //순회를 돌아갈때마다 누적값을 할당하고
    //누적값보다 다음값이 클때에
    //마지막에 도착하면
    //불린값을 리턴
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= result) {
            return false;
        }
        result += arr[i];
    }
    return true;
}