// compareOnlyAlphabet
// 문제
// 두 개의 문자열을 입력받아 대소문자를 구분하지 않고(case insensitive) 서로 같은지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : str1
// string 타입의 문자열
// 인자 2 : str2
// string 타입의 문자열
// 출력
// boolean 타입을 리턴해야 합니다.
// 자바스크립트 표준인 string method를 검색해 봅니다. (javascript string method 또는 자바스크립트 문자열 함수)
// 두 문자열을 모두 대문자(upperCase) 또는 소문자(lowerCase)로 바꾸면, 두 문자열을 오직 알파벳 기준(대소문자 구분 X)으로만 비교할 수 있습니다.

function compareOnlyAlphabet(str1, str2) {
    // TODO: 여기에 코드를 작성합니다.
    if(str1.toLowerCase() === str2.toLowerCase()){
      return true;
    } else if(str1.toLowerCase() !== str2.toLowerCase()){
      return false;
    }
  }
  