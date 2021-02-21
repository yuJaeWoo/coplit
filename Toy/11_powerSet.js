// powerSet
// 문제
// 하나의 집합을 의미하는 문자열을 입력받아 각 문자를 가지고 만들 수 있는 모든 부분집합을 리턴해야 합니다.
//
//     입력
// 인자 1 : str
// string 타입의 공백이 없는 알파벳 소문자 문자열
// 출력
// 배열(arr)을 리턴해야 합니다.
//     arr[i]는 각 부분집합의 원소로 구성된 문자열
// 주의사항
// arr[i]는 각 부분집합을 구성하는 원소를 연결한 문자열입니다.
//     arr[i]는 알파벳 순서로 정렬되어야 합니다.
//     집합은 중복된 원소를 허용하지 않습니다.
//     부분집합은 빈 문자열을 포함합니다.
//     arr은 사전식 순서(lexical order)로 정렬되어야 합니다.
//     입출력 예시
// let output1 = powerSet('abc');
// console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']
//
// let output2 = powerSet('jjump');
// console.log(output2); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']

const powerSet = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];
  let arr = str.split('').sort();


  const dedu = arr.reduce((acc, el) => {
    if (acc[acc.length - 1] === el) { //중복된 값이 있을때
      return acc;
    } else { // 중복된 값이 없을때
      return acc.concat(el);
    }
  });

  function recur(a, results){ // a는 arr[i]
    if(a === dedu.length){
      result.push(results);
      return;
    }
    recur(a+1, results)

    recur(a+1, results + dedu[a])
  }

  recur(0, '')

  return result.sort();
};
