// numberSearch
// 문제
// 문자열을 입력받아 문자열에서 숫자를 모두 찾아 더한 뒤에 해당 값을 (숫자와 공백을 제외한 나머지) 문자열의 길이로 나눈 값을 정수로 반올림하여 리턴해야 합니다.
//
//     입력
// 인자 1 : str
// string 타입의 문자열
// 출력
// number 타입을 리턴해야 합니다 (0 이상의 정수)
// 주의 사항
// 빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.
// 숫자(digit)는 연속해서 등장하지 않습니다.
//     입출력 예시
// let output = numberSearch('Hello6 ');
// console.log(output); // --> 1
//
// output = numberSearch('Hello6 9World 2,');
// console.log(output); // --> 1
//
// output = numberSearch('Hello6 9World 2, Nic8e D7ay!');
// console.log(output); // --> 2
// 힌트
// 주어진 문자(길이 1의 문자열)이 숫자(digit)인지 판단하는 방법은 여러 가지 입니다.
//     그 중 하나는 해당 문자가 숫자들의 집합(문자열 또는 배열)에 속하는 지를 판단하는 것입니다.
//     이와 관련해서 js includes를 검색해 봅니다.

function numberSearch(str) {
  // TODO: 여기에 코드를 작성합니다.
  if(str === ''){
    return 0;
  }
  let arr = str.split('');
  let combine = 0;
  let result = 0;
  let garbage = [];
  arr.forEach(function(el){
    if(!isNaN(el)){
      combine += Number(el);
    }else{
      garbage.push(el);
    }
  })
  result = Math.round(combine/garbage.length);
  return result;
}
