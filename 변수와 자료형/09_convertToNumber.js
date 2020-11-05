// convertToNumber
// 우리가 웹 브라우저에 적혀있는 정보를 가져오면 보통 string의 형태로 받아오게 됩니다. 
// 즉, 숫자로 세고 싶은 정보도 string으로 인식하기 때문에, 정상적인 숫자를 위한 연산을 수행할 수 없습니다.

// 이를 해결하기 위해서 타입을 변경하는 방법에 대해서 알아볼까요? 
// number로 변경하기 위해서는 Number() 함수를 사용해서 변경할 수 있습니다.

// Number('100'); // 100
// 문제를 직접 풀어보면서 변경해볼까요?

function convertToNumber(anything) {
    // TODO: 여기에 코드를 작성합니다.
    let result;
    result = Number(anything);
    return result;
  }
  