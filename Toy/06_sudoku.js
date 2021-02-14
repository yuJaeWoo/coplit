// sudoku
// 문제
// 스도쿠는 숫자 퍼즐로, 가로 9칸, 세로 9칸으로 이루어져 있는 표에 1부터 9까지의 숫자를 채워 넣는 퍼즐입니다. 퍼즐을 푸는 방법은 아홉 가로줄, 세로줄, 3X3 칸에 1에서 9까지의 숫자를 중복되지 않게 한 번씩만 넣으면 됩니다. 일부 칸이 비어있는 상태인 스도쿠 보드를 입력받아 스도쿠 퍼즐이 완성된 보드를 리턴해야 합니다.
//
//     입력
// 인자 1 : board
// 가로 길이(board[i].length)와 세로 길이(board.length)가 모두 9인 2차원 배열
// matrix[i][j]는 1 이상 9 이하의 자연수
// 출력
// 가로와 세로의 길이가 모두 9인 2차원 배열을 리턴해야 합니다.
//     주의사항
// 입력으로 주어지는 board를 직접 수정해도 상관없습니다.
//     입력으로 주어지는 board 가지고 완성시킬 수 있는 보드는 유일(unique)합니다.
//     숫자가 입력되지 않은 칸은 편의상 0이 입력되어 있습니다.
//     입출력 예시
// let board = [
//   [0, 3, 0, 2, 6, 0, 7, 0, 1],
//   [6, 8, 0, 0, 7, 0, 0, 9, 0],
//   [1, 9, 0, 0, 0, 4, 5, 0, 0],
//   [8, 2, 0, 1, 0, 0, 0, 4, 0],
//   [0, 0, 4, 6, 0, 2, 9, 0, 0],
//   [0, 5, 0, 0, 0, 3, 0, 2, 8],
//   [0, 0, 9, 3, 0, 0, 0, 7, 4],
//   [0, 4, 0, 0, 5, 0, 0, 3, 6],
//   [7, 0, 3, 0, 1, 8, 0, 0, 0],
// ];
// let output = sudoku(board);
// console.log(output); // -->
// /*
// [
//   [4, 3, 5, 2, 6, 9, 7, 8, 1],
//   [6, 8, 2, 5, 7, 1, 4, 9, 3],
//   [1, 9, 7, 8, 3, 4, 5, 6, 2],
//   [8, 2, 6, 1, 9, 5, 3, 4, 7],
//   [3, 7, 4, 6, 8, 2, 9, 1, 5],
//   [9, 5, 1, 7, 4, 3, 6, 2, 8],
//   [5, 1, 9, 3, 2, 6, 8, 7, 4],
//   [2, 4, 8, 9, 5, 7, 1, 3, 6],
//   [7, 6, 3, 4, 1, 8, 2, 5, 9],
// ];
//  */

const sudoku = function(board) {
  // TODO: 여기에 코드를 작성합니다.
  // rowIndex행에서 num이랑 충돌나는 녀석이 있는지 찾아요
  function checkRowConflict(rowIndex, num) {
    for (let i = 0; i < 9; i++) {
      if (board[rowIndex][i] === num) return true;
    }
    return false;
  }
  // colIndex열에서 num이랑 충돌나는 녀석이 있는지 찾아요
  function checkColConflict(colIndex, num) {
    for (let i = 0; i < 9; i++) {
      if (board[i][colIndex] === num) return true;
    }
    return false;
  }
  // [0, 0] ~ [2, 2] 0
  // [3, 3] ~ [5, 5] 1
  // 스도쿠에 사각형은 9개가 있어요
  // 0 1 2
  // 3 4 5
  // 6 7 8
  // 각 사각형 안에는 배열이 9칸 들어있어요
  // 내가 속한 사각형(3*3) 안에서 충돌나는 녀석이 있는지 찾아요
  function checkSquareConflict(rowIndex, colIndex, num) {
    rowIndex = Math.floor(rowIndex / 3) * 3;
    colIndex = Math.floor(colIndex / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[rowIndex + i][colIndex + j] === num) return true;
      }
    }
    return false;
  }
  // 스도쿠를 순회하면서 숫자 0을 찾아요
  // 숫자 0을 1~9 숫자로 바꿔야 하니까요
  function findZeroPosition(arr) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === 0) {
          arr[0] = i;
          arr[1] = j;
          return true;
        }
      }
    }
    return undefined;
  }
  // 충돌조건 3개를 충족하는지 체크해요
  // 가로 세로 사각형에 충돌하지 않으면 true를 반환해요
  function checkConflict(row, col, num) {
    return (!checkRowConflict(row, num) && !checkColConflict(col, num) &&
        !checkSquareConflict(row, col, num));
  }
  function recursion() {
    const arr = [];
    // 스도쿠에서 0이 없으면(스도쿠를 완성했으면) true를 반환해요
    // 스도쿠에 0이 있으면 arr에 좌표를 넣어요 (파라미터에 배열을 넘기면 call by reference로 원본 배열을 수정가능)
    if (!findZeroPosition(arr)) return true;
    // arr에 담긴 좌표를 해체할당해줘요
    const [row, col] = arr;
    for (let i = 1; i <= 9; i++) {
      // 지금 row col은 숫자 0인 좌표에요 여기다가 1~9까지 다 넣어볼거에요
      if (checkConflict(row, col, i)) {
        // 일단은 1부터 넣어요
        board[row][col] = i;
        // 그리고 재귀호출을 해요 그럼 다음 0 지점에서 같은 로직을 반복해요
        // 만약 반환받은 값이 true이면 그대로 반복문과 재귀를 종료해요
        if (recursion()) return true;
        // 반환받은 값이 false이면(다음 칸이 전부 충돌나면) 넣은 숫자를 회수해요
        // 그리고 반복문을 마저 진행해요
        board[row][col] = 0;
      }
    }
    // 반복문을 다 돌았으면 (전부 충돌나면) false를 반환해요
    return false;
  }
  recursion();
  return board;
};

// const sudoku = function (board) {
// // TODO: 여기에 코드를 작성합니다.
//   // 준비물
//   // arr = 1-9까지의 정수를 담고있는 배열.
//   // inDel = arr의 요소를 넣어주고 빼주는 메서드.
//   // recursionSudoku = 해당배열의 요소를 재귀순회하며 백트랙킹을 할수있는 메서드.
//   // TODO: 여기에 코드를 작성합니다.
//   let arr = [1,2,3,4,5,6,7,8,9];
//   let result = board;

//   function inDel(a,b){
//     let i = 0;
//     if(board[a],[b] === 0){
//         board[a][b] = arr[i];
//         i++;
//       }else{
//     board[a][b]=0;
//   }

//   function recursion(ro){
//     if(ro === board.length){
//       return result;
//     }

//     for(let i = ro; i <9; i++){
//       for(let j =0; j<9; j++){
//         if(!board[i][j] === 0){
//           recursion(ro + 1)
//         }else{
//           inDel(i,j);
//         }

//       }
//     }

//   }
//   recursion(0);
// }
// }