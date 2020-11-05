// getValueOfNthElement
// 문제
// 배열과 수를 입력받아 수가 가르키는 인덱스에 해당하는 객체의 'name' 속성값을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 객체를 요소로 갖는 배열
// 인자 2 : num
// number 타입의 정수 (num >= 0)
// 출력
// 해당되는 객체의 'name' 속성값을 리턴해야 합니다.
// 주의 사항
// 빈 배열을 입력받은 경우, 'no name'을 리턴해야 합니다.
// 배열의 범위를 벗어나는 인덱스를 입력받은 경우, 마지막 객체의 'name' 속성값을 리턴해야 합니다.
// 입출력 예시
// let output = getValueOfNthElement([{ name: 'Kelly' }, { name: 'Anna' }], 1);
// console.log(output); // --> 'Anna'

// output = getValueOfNthElement([{ name: 'Kelly' }, { name: 'Anna' }], 2);
// console.log(output); // --> 'Anna'

// output = getValueOfNthElement(
//   [{ name: 'Jim' }, { name: 'Tim' }, { name: 'Pooh' }],
//   1
// );
// console.log(output); // --> 'Tim'

// output = getValueOfNthElement([], 0);
// console.log(output); // --> 'no name'

function getValueOfNthElement(arr, num) {
    if (!arr.length) {
        return 'no name';
    } else if (num > arr.length - 1) {
        //입력받은 수가 배열범위를 넘어가면 마지막 객체를 리턴
        return arr[arr.length - 1]['name'];
    } else {
        return arr[num]['name'];
    }
    }