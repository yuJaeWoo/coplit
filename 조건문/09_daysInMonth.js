// daysInMonth
// 문제
// 특정 달(month)을 입력받아 각 달에 몇 일이 있는지 리턴해야 합니다.

// 입력
// 인자 1 : month
// number 타입의 정수 (1 <= month && month <= 12)
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 월 예시) 1월은 1, 2월은 2... 12월은 12입니다.
// 7월과 8월에는 모두 31일이 존재합니다.
// 2월 29일은 존재하지 않는다고 가정합니다.

function daysInMonth(month) {
    // TODO: 여기에 코드를 작성합니다.
    monthNum31 = 31;
    monthNum30 = 30;
    monthNum28 = 28;
   switch (month){
     case 1:
      return 31;
      break;
     case 2:
      return 28;
      break;
     case 3:
      return 31;
      break;
      case 4:
      return 30;
      break;
      case 5:
      return 31;
      break;
      case 6:
      return 30;
      break;
      case 7:
      return 31;
      break;
      case 8:
      return 31;
      break;
      case 9:
      return 30;
      break;
      case 10:
      return 31;
      break;
      case 11:
      return 30;
      break;
      case 12:
      return 31;
      break;
   }
  }
  