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
// 빅오 개념
/*
정식으로 입력된 내용이 늘어날 수록 알고리즘에 실행 시간이 어떻게 변하는지 설명하는
공식적인 방식입니다.
빅오는 어떤 펑션의 입력값이 늘어나는 것과 펑션 실행시간이 변하는 관계를 의미합니다
n이 커질수록 컴퓨터가 f(n)상수 곱하기 f(n)보다  간단히 연산을 덜 해야한다면 
그 알고리즘을 O(f(n)) 이라고 표현한다
 

*/
