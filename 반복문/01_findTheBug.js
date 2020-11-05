// findTheBug
// 문제
// 문자열을 입력받아 버그('#')의 인덱스를 리턴해야 합니다.

// 입력
// 인자 1 : word
// string 타입의 단어 (word.length >= 0)
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// '#' 기호가 없는 경우 undefined를 리턴해야 합니다.

function findTheBug(word) {
    // TODO: 여기에 코드를 작성합니다.
    let i;
    if(word.includes('#')){
    for(i = 0; i < word.length;i++){
      if(word[i] === '#'){
       let result = i;
       return result;
      }
      
    }
    return 'undefined';
    }
  }
  