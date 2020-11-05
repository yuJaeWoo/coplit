// listPrimes
// 문제
// 수를 입력받아 2부터 해당 수까지의 소수(prime number)들을 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 2)
// 출력
// string 타입을 리턴해야 합니다.
// 2-3-5-7의 형식으로 리턴해야 합니다.
// 주의 사항
// 이중 반복문(double for loop)을 사용해야 합니다.
// 반복문의 break 문에 대해서 학습합니다. (javascript loop break)

function listPrimes(num) {
    let result = '2';
    for (let i = 3; i <= num; i += 2) {
      let isSso = true;
      //소수확인
      let sqrt = parseInt(Math.sqrt(i));
      //약수확인
      for (let divider = 3; divider <= sqrt; divider += 2) {
        if (i % divider === 0) {
          isSso = false;
          break;
        }
      }
  
      if (isSso) {
        result = `${result}-${i}`;
      }
    }
  
    return result;
  }