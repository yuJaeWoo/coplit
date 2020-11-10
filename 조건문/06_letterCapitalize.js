// letterCapitalize
// 문제
// 문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자가 대문자인 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 공백이 있는 알파벳 문자열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 단어는 공백 한 칸으로 구분합니다.
// 연속된 공백이 존재할 수 있습니다.
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 입출력 예시
// let output1 = letterCapitalize('hello world');
// console.log(output1); // "Hello World"
// let output2 = letterCapitalize('javascript  is sexy ');
// console.log(output2); // "Javascript  Is Sexy "


function letterCapitalize(str) {
    let words = str.split(' ');
    //words 배열에 str을 공백 기점으로 분할 할당
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > 0) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }
    }
    //words배열의 길이만큼 돌면서 인덱스의 값의 길이가 0보다 크면
    //그 인덱스 값의 첫번째 문자는 대문자 + substr함수로 1번인덱스부터 나머지까지 할당
  
    str = words.join(' ');
    //join함수로 words배열의 값을 스트링값으로 집어넣음
    return str;
  }