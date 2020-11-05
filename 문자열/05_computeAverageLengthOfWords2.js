// computeAverageLengthOfWords2
// 문제
// 두 단어를 입력받아 두 단어의 평균 길이를 내림하여 리턴해야 합니다.

// 입력
// 인자 1 : word1
// string 타입의 알파벳 문자열 (word1.length <= 10)
// 인자 2 : word2
// string 타입의 알파벳 문자열 (word2.length <= 10)
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 평균 길이를 내림하여 리턴해야 합니다.
// Math 객체를 검색해 봅니다. (js math object 또는 자바스크립트 math 객체)
// 자바스크립트에서의 내림 연산을 직접 검색해 봅니다. (자바스크립트 내림)

function computeAverageLengthOfWords2(word1, word2) {
    // TODO: 여기에 코드를 작성합니다.
    let result = Math.floor((word1.length + word2.length) / 2);
    return result;
  } 