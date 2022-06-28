// 1번예제
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i < n; i++) {
    total += i;
  }
  return total;
}

console.log(addUpTo(5)); //10
// 2번 예제
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}
console.log(addUpTo2(5));
//3번 예제
function addUpTo3(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
addUpTo3(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
//printAllPairs(5);

// 빅오 개념
/*
정식으로 입력된 내용이 늘어날 수록 알고리즘에 실행 시간이 어떻게 변하는지 설명하는
공식적인 방식입니다.
빅오는 어떤 펑션의 입력값이 늘어나는 것과 펑션 실행시간이 변하는 관계를 의미합니다
n이 커질수록 컴퓨터가 f(n)상수 곱하기 f(n)보다  간단히 연산을 덜 해야한다면 
그 알고리즘을 O(f(n)) 이라고 표현한다
 빅오의 복잡도를 분석할떄 매우 복잡해집니다.
 1. 산수는 상수 라는것 덧셈 뺄셈 곱셈 나눗셈을 포함합니다.

 공간 복잡도

 보조 공간 복잡도 = 입력되는것을 제외하고 알고리즘 자체가 필요로 하는 공간을 의미
 booleans , numvers ,undefined, null은 자바스크립에서 불변 공간이다
 그렇기 떄문에 입력 크기와는 상관 없이 숫자가 1이든 1000이든 모두 불변 공간이라고 여겨짐
 문자열은 O(n)의 공간이 필요함

로그함수와 지수함수는 짝이다
 어떤 탐색 알고리즘 들은 로그 시간 복잡도를 갖고 있다
 효율적인 것들은 대부분 로그 시간 복잡도를 가지고있음
 재귀는 공간 복잡도와 관련이 있다

 알고리즘 성능을 비교하기 위해서는 빅오 표기법을 사용한다
 입력 크기가 늘어날수록 전체적인 추세와 관련 되어 있습니다.
 빅오를 통해서 시간복잡도와 공간복잡도를 알아 볼수있다
 정확도 보다는 전체적인 추세를 알아 볼수있다
 빅오로 측정되는 알고리즘의 시간과 공간복잡도는 하드웨어에 영향을 받지 않습니다.
 빅오는 실행될 연산의 갯수를 따진다
*/
//공간복잡도 ex

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(sum([3, 2, 1]));
