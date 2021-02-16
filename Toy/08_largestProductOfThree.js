// largestProductOfThree
// 문제
// 정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.
//
//     입력
// 인자 1 : arr
// number 타입을 요소로 갖는 임의의 배열
// 출력
// number 타입을 리턴해야 합니다.
//     주의사항
// 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
//     배열의 요소는 음수와 0을 포함하는 정수입니다.
//     배열의 길이는 3 이상입니다.
//     입출력 예시
// let output = largestProductOfThree([2, 1, 3, 7]);
// console.log(output); // --> 42 (= 2 * 3 * 7)
//
// output = largestProductOfThree([-1, 2, -5, 7]);
// console.log(output); // --> 35 (= -1 * -5 * 7)

const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  mCount = 0;
  let mArr = [];
  let result = 1;
  let count = 0;
  arr.sort(function(a,b){
    return b-a;
  });//내림차순으로 정렬.

  for(let i =0; i<arr.length; i++){
    if(arr[i] < 0){
      mCount++;
    }
  } //배열내의 음수갯수 파악.

  if(mCount===2){ //음수가 두개라면
    for(let j=0; j< arr.length; j++){
      mArr.push(Math.abs(arr[j])) //mArr에 arr을 절대값으로 집어넣음
    }
    mArr.sort(function(a,b){
      return b-a;
    });//내림차순으로 정렬.
    for(let prop of mArr){
      result *= prop;
      count++
      if(count ===3){
        return result;
      }
    }
  }else{
    for(let prop of arr){
      result *= prop;
      count++
      if(count ===3){
        return result;
      }
    }

  }


};
