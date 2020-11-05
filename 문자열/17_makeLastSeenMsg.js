// makeLastSeenMsg
// 문제
// 사용자의 이름과 미접속 시간(분)을 입력받아 조건별로 다른 메세지를 리턴해야 합니다.

// 입력
// 인자 1 : name
// string 타입의 이름
// 인자 2 : period
// number 타입의 미접속 시간 (분 단위)
// 출력
// string 타입을 리턴해야 합니다.
// 미접속 시간이 1시간 보다 적을 경우, 분 단위로 표기합니다.
// 미접속 시간이 1시간 보다 크고 24시간 보다 적을 경우, 시간 단위로 내림처리하여 표기합니다.
// 미접속 시간이 24시간 보다 클 경우, 일 단위로 내림처리하여 표기합니다.
// 자바스크립트에서 문자열 간 비교 연산은 사전식(lexical) 비교입니다. ('123' > '2' => false)
// string 타입과 number 타입의 덧셈 연산에 주의합니다.

function makeLastSeenMsg(name, period) {
    // TODO: 여기에 코드를 작성합니다.
    let count;
    if (period < 60){
      count = `${period}분`;
    } if(period > 60 && period < 1440) {
      let hourDivide = period / 60;
      count = `${Math.floor(hourDivide)}시간`;
    } if(period >1440){
      let dayDivide = period / 1440;
      count = `${Math.floor(dayDivide)}일`;
    }
    return `${name}: ${count} 전에 접속함`; 
  }
  