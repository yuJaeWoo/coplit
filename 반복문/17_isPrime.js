// isPrime
// 문제
// 수를 입력받아 소수(prime number)인지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 수
// 출력
// boolean 타입을 리턴해야 합니다.
// 자바스크립트 내장 객체인 Math를 활용해 불필요한 연산을 줄일 수 있습니다. (javascript square root 또는 자바스크립트 제곱근)

function isPrime(num) {
    // TODO: 여기에 코드를 작성합니다.
    // 소수는 자신을 포함해서 나눌수있는 수가 최대 2개
    let i = 0;
    let count =0;
    for (i=1; i < num;i++ ){
      if(num%i === 0 ){
        count++;
        
      } 
    }
    if(count > 3){
          return false;
        } if (count <= 2){
          return true;
        }
    
  }
  