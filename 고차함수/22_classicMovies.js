// classicMovies
// 문제
// 영화 정보가 담긴 객체를 요소로 갖는 배열과 연도를 입력받아 해당 연도 이전의 영화를 요소로 갖는 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 객체를 요소로 갖는 배열
// arr[i]는 'title', 'year' 등의 속성을 갖는 객체
// 'year' 속성은 number 타입 (1 이상의 정수)
// 인자 2 : year
// number 타입의 연도 (1 이상의 정수)
// 출력
// string 타입을 요소로 갖는 배열을 리턴해야 합니다.
// 각 요소는 영화 제목 by 영화 감독의 형태를 가져야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 입출력 예시
// let output = classicMovies(
//   [
//     {
//       title: 'Batman',
//       year: 1989,
//       director: 'Tim Burton',
//       imdbRating: 7.6,
//     },
//     {
//       title: 'Batman Returns',
//       year: 1992,
//       director: 'Tim Burton',
//       imdbRating: 7.0,
//     },
//     {
//       title: 'Batman Forever',
//       year: 1995,
//       director: 'Joel Schumacher',
//       imdbRating: 5.4,
//     },
//   ],
//   1993
// );

// console.log(output); // --> ["Batman by Tim Burton", "Batman Returns by Tim Burton"]

function classicMovies(arr, year) {
    // TODO: 여기에 코드를 작성합니다.
    const result = arr.filter(function(a){
     return a.year < year;
    })
    return result.map(function(a){
      return `${a.title} by ${a.director}`;
    })
  }
  