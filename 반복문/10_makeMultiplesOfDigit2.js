// makeMultiplesOfDigit2
// 문제
// 두 개의 수를 입력받아 두 수를 포함해 두 수 사이의 수 중 2의 배수의 개수를 리턴해야 합니다.

// 입력
// 인자 1 : num1
// number 타입의 정수 (num1 >= 0)
// 인자 2 : num2
// number 타입의 정수 (num2 >= 0)
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// num1이 num2보다 작지 않을 수도 있습니다.
// 0은 2의 배수가 아니라고 가정합니다.

function makeMultiplesOfDigit2(num1, num2) {
    // TODO: 여기에 코드를 작성합니다.
    let i = 0;
    let count = 0;
    //num1이 작을때
    if(num1 < num2){
      //반복문 i가 num2와 같을때까지 증가(i는 num1의 값)
    for (i = num1;i <= num2;i++){
      //조건문 i가 짝수이고, 0이 아닌경우 카운트 증가
      if(i % 2 ===0 && i !== 0){
        count+=1;
      // 아닌경우에는 카운트에 0을 더함
      }else{
        count+=0;
      }
    }
    //카운트 반환
    return count;
    
    
    //num1이 num2보다 클경우
    }if(num1 > num2){
    
     //반복문 num2가 num1의 값이 될때까지 증가
    for (i = num2;i <= num1;i++){
      // 조건문 num2가 짝수이거나 0이 아닐때
      if(i % 2 ===0 && i !== 0){
        count+=1;
      }else{
        count+=0;
      }
    }
    return count;
    //조건문 num1과 num2가 값이 같고 num1이 짝수일때
    } if(num1 === 0 && num2 === 0){
      return 0;
    } if(num1 === num2 && num1 % 2 === 0) {
      count +=1;
      return count;
    }
  }
  