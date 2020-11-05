// getSumOfFactors
// 문제
// 수를 입력받아 약수(factor)의 합을 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 수
// 출력
// number 타입을 리턴해야 합니다.

function getSumOfFactors(num) {
    // TODO: 여기에 코드를 작성합니다.
    let result=num;
    for(let i =1;i<=(num/2);i++){
      if(num%i === 0 ){
        result += i;
      } else {
        result += 0;
      }
    }
    return result;
  }
  
  