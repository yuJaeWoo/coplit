// convertScoreToGradeWithPlusAndMinus
// 문제
// 점수를 입력받아 점수에 해당하는 등급을 리턴해야 합니다.

// 입력
// 인자 1 : score
// number 타입의 정수
// 출력
// string 타입을 리턴해야 합니다.
// 각 등급의 최저 점수는 아래와 같습니다. ('F'의 경우 최대 점수를 표기)
// 90 이상 --> 'A'
// 80 이상 --> 'B'
// 70 이상 --> 'C'
// 60 이상 --> 'D'
// 60 미만 --> 'F'
// 주의 사항
// 만약 주어진 점수가 100을 초과하거나 0 미만인 경우, 문자열 'INVALID SCORE'를 리턴해야 합니다.
// 각 등급의 최고 점수보다 7점 이하인 경우, 등급과 함께 '-'를 리턴해야 합니다.
// 각 등급의 최저 점수보다 8점 이상인 경우, 등급과 함께 '+'를 리턴해야 합니다.
// F+ 와 F- 는 존재하지 않습니다.

function convertScoreToGradeWithPlusAndMinus(score) {
    // TODO: 여기에 코드를 작성합니다.
    if(score >= 90 && score <= 100){
         if(score >= 98){
          return 'A+';
      } else if(score <= 97 && score > 93){
          return 'A'; is 
      } else {
          return 'A-';
      }
  
  } if (score >= 80 && score < 90){
        if(score >= 88){
          return 'B+';
      } else if(score <= 87 && score > 83){
          return 'B';
      } else {
          return 'B-';
      }
  
  } if (score >= 70 && score < 80){
        if(score >= 78){
          return 'C+';
      } else if(score <= 77 && score > 73){
          return 'C';
      } else {
          return 'C-';
      }
  
  } if (score >= 60 && score < 70){
         if(score >= 68){
          return 'D+';
      } else if(score <= 67 && score > 63){
          return 'D';
      } else {
          return 'D-';
      }
  
  } if (score < 60 && score >=0){
    return 'F';
  } else if (score > 100){
    return 'INVALID SCORE';
  } else {
    return 'INVALID SCORE';
  }
  }
  