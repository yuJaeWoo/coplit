// rockPaperScissors
// 문제
// 가위바위보 게임은 2인 이상의 사람이 동시에 '가위, 바위, 보'를 외치고 동시에 가위, 바위 또는 보 중에서 한 가지를 의미하는 손 모양을 내밀어 승부를 결정짓는 게임이다. 세 판의 가위바위보 게임을 할 경우, 한 사람은 세 번의 선택(예. 가위, 가위, 보)을 할 수 있습니다. 세 번의 선택으로 가능한 모든 경우의 수를 구하는 함수를 작성합니다.
//
//     입력
// 없음
// 출력
// 2차원 배열(arr[i])을 리턴해야 합니다.
//     arr[i]는 전체 경우의 수 중 한 가지 경우(총 세 번의 선택)를 의미하는 배열입니다.
//     arr[i]는 'rock', 'paper', 'scissors' 중 한 가지 이상을 요소로 갖는 배열입니다.
//     arr[i].length는 3
// 주의사항
// 최종적으로 리턴되는 배열의 순서는 가중치 적용 정렬(Weighted Sort)을 따릅니다.
//     중요도는 'rock', 'paper', 'scissors' 순으로 높습니다.
//     쉽게 생각해 올림픽 순위 결정 방식을 참고하면 됩니다.
// 금메달('rock')이 은메달('paper')보다 우선하고, 은메달('paper')이 동메달('scissors')보다 우선합니다.
//     입출력 예시
// let output = rockPaperScissors();
//
// console.log(output);
// /*
//     [
//       ["rock", "rock", "rock"],
//       ["rock", "rock", "paper"],
//       ["rock", "rock", "scissors"],
//       ["rock", "paper", "rock"],
//       // ...etc ...
//     ]
//   */
// Advanced
// 가위바위보 게임의 수를 나타내는 양의 정수 rounds가 주어질 경우, 해당 rounds 동안 선택할 수 있는 모든 경우의 수를 리턴하도록 함수를 작성해 보세요.
//     let output = rockPaperScissors(5);
//
// console.log(output);
// /*
//     [
//       ["rock", "rock", "rock", "rock", "rock"],
//       ["rock", "rock", , "rock", "rock", "paper"],
//       ["rock", "rock", , "rock", "rock", "scissors"],
//       ["rock", "rock", "rock", "paper", "rock"],
//       ["rock", "rock", "rock", "paper", "paper"],
//       ["rock", "rock", "rock", "paper", "scissors"],
//       ["rock", "rock", "rock", "scissors", "rock"],
//       // ...etc ...
//     ]
//   */

const rockPaperScissors = function (number) {
  // TODO: 여기에 코드를 작성합니다.
  let cases = ["rock", "paper", "scissors"];
  let result = [];
//파라미터에 값을 넣어주지않는다면 기본 3판이라는 전제조건에 맞게끔 number를 3으로 초기화.
  if (number === undefined) {
    number = 3;
  }

  function check(count) {
    let newStorage = [];
    if (count === 0) {
      cases.forEach(elem => result.push([]));
    } else if (count === 1) {
      result.forEach((elem, idx) => elem.push(cases[idx]));
    } else {
      result.forEach(elem => {
        cases.forEach(item => newStorage.push(elem.concat(item)));
        result = newStorage;
      });
    }

    if (number === count) {
      return;
    }

    check(count + 1);
  };

  check(0);

  return result;
};

