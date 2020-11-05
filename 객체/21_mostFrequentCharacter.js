// mostFrequentCharacter
// 문제
// 문자열을 입력받아 가장 많이 반복되는 문자(letter)를 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 공백이 있는 문장
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 띄어쓰기는 제외합니다.
// 가장 많이 반복되는 문자가 다수일 경우, 가장 먼저 해당 횟수에 도달한 문자를 리턴해야 합니다.
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 입출력 예시
// let output = mostFrequentCharacter('apples not oranges');
// console.log(output); // --> 'p'

// output = mostFrequentCharacter('hello world');
// console.log(output); // --> 'l'

// output = mostFrequentCharacter('   ');
// console.log(output); // --> ''

// output = mostFrequentCharacter('');
// console.log(output); // --> ''

// output = mostFrequentCharacter('abba');
// console.log(output); // --> 'b'

function mostFrequentCharacter(str) {
    //객체를 선언하면서 키값(int)과 속성값(string)을 미리 초기화
  let obj = { mostCount: 0, mostFrequent: '' };
  for (let i = 0; i < str.length; i++) {
      //띄어쓰기시에는 continue문으로 반복문재시작
      if (str[i] === ' ') {
      continue;
      }
      //객체에 키값과 속성값을 할당 str[i]의 값이 없을때 0으로 선언하고 추가
      //값이 있다면 1씩 누적 추가
      if (obj[str[i]] === undefined) {
      obj[str[i]] = 0;
      }
      obj[str[i]] += 1;
      //선언한 값이 mostCount(0) 보다 클경우에는 
      //obj[str[i]]의 속성값을 mostCount에 넣는다
      if (obj[str[i]] > obj['mostCount']) {
      obj['mostCount'] = obj[str[i]];
      //mostFrequent값에는 str[i]의 값을 string으로 추가
      obj['mostFrequent'] = str[i];
      }
  }
  //string으로 반환해야하기에 mostFrequent값을 반환
  return obj['mostFrequent'];
  }
