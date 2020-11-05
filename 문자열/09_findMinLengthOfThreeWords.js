// findMinLengthOfThreeWords
// 문제
// 세 개의 단어를 입력받아 그 중 가장 짧은 단어의 길이를 리턴해야 합니다.

// 입력
// 인자 1 : word1
// string 타입의 문자열 (word1.length <= 20)
// 인자 2 : word2
// string 타입의 문자열 (word2.length <= 20)
// 인자 3 : word3
// string 타입의 문자열 (word3.length <= 20)
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 단어들의 길이가 모두 같은 경우, 그 길이를 리턴해야 합니다.

function findMinLengthOfThreeWords(word1, word2, word3) {
    // TODO: 여기에 코드를 작성합니다.
    let minLength;
    if(word1.length < word2.length){
      if(word1.length < word3.length){
        minLength = word1.length;
        return minLength;
      }
    } if(word2.length < word1.length){
      if(word2.length < word3.length){
        minLength = word2.length;
        return minLength;
      }
    } if(word3.length < word1.length) {
      if(word3.length < word2.length){
        minLength = word3.length;
        return minLength;
    } 
  }if (word1.length === word2.length ) {
      if(word2.length === word3.length){
       minLength = ((word1.length + word2.length + word3.length)/3);
       return minLength;
      }
    }
  }