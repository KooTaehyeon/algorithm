- **빅오(_big_-_O_) 표기법**
  빅오 정의
  1. 엄청 잘 짠 코드여도 대부분 n log(n)가 나온다
     2.1. 2. 몇몇 유명 로직들의 bigO를 알아두면 편하다 \***\*n  이 증가함에 따라 컴퓨터가 수행해야 하는 간단한 작업의 수가 결국 상수 곱하기 f(n)  보다 작은 경우 알고리즘은 O(f(n)) 이라고 합니다.\*\***
  - f(n)은 선형일 수 있습니다(f(n) = n)
  - f(n)은 2차(f(n) = n)일 수 있습니다.
  - f(n)은 일정할 수 있습니다(f(n) = 1)
  - f(n)은 완전히 다른 것일 수 있습니다!
  ### 예시
  작업 수는 (결국) *n* 의 배수로 제한됩니다 (예: *10n* ) .
  1.
  ```css
  function addUpTo(n) {
    return n * (n + 1) / 2;
  }
  ```
  1.
  ```css
  function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }
  ```
  ### big 0 표현식 단순화
  알고리즘의 시간 복잡도를 결정할떄 큰 0 표현식에 대한 몇가지 유용한 경험 법칙이 있습니다.
  이러한 경험 법칙은 big 0 표기법 정의 결과 입니다.
  ### big 0 속기
  - Big 0 로 복잡성을 분석하면 복잡해 질 수 있습니다.
  - 도움이 될 수 있는 몇가지 경험 법칙이 있습니다.
  - 이 규칙은 항상 작동하지는 않지만 유용한 출발점입니다.
  1. 산술 연산은 일정하다
  2. 변수 할당은 일정합니다.
  3. 배열의 요소(인덱스기준) 또는 객체(키 기준)에 엑세스 하는 것은 일정합니다.
  4. 루프에서 복잡성은 루프의 길이에 루프 내부에서 발생하는 모든것의 복잡성을 곱한것입니다.
  ### 공간 복잡성
  입력 크기가 증가함에 따라 알고리즘 런타임을 어떻게 분석?
  Big 0 표기법을 사용하여 공간 복잡성을 분석 할 수 있습니다.
  알고리즘에서 코드를 실행하기 위해 할당해야 하는 메모리는 얼마?
  입력은 때로는 입력이 차지하는 공간을 포함하지않고 알고리즘에 필요한 공간을 나타내는
  **보조 공간 복잡성**이라는 용어가 있다
  달리 언급하지 않는 한 공간 복잡성에 대해 이야기할떄 기술적으로 **보조 공간 복잡성**에 대해서 알아 봐야함
  ### JS의 공간 복잡성(경험의 법칙)
  - 대부분 기본 요소 (**booleans, numbers, undefined, null**)는 상수 공간이다.
  - 문자열에는 0(n)공백이 필요하다 (여기서 n은 문자열 길이)
  - 참조 유형은 일반적으로 0(n)이며, 여기서 n은 길이(배열의 경우) 또는 키의 수(객체의 경우)이다.
  ```css
  //예
  function sum(arr) {
    let total = 0; // 하나의 숫자
    for (let i = 0; i < arr.length; i++) { // 다른번호 let i
      total += arr[i];
    }
    return total;
  }
   0(1)공간
  ```
  ## 요약
  - 알고리즘의 성능을 분석하기 위해 Big 0표기법을 사용합니다.
  - Big 0 표기법은 알고리즘의 시간 또는 공간 복잡성에 대한 높은 수준의 이해를 제공함
  - Big 0 표기법은 정밀도에 대해서 신경쓰지 않고 일반적인(선향,2차,상수)만을 고려함
  - 시간 또는 공간복잡성(Big 0에서측정)은 알고리즘 실행에 사용된 하드웨어가 아니라 알고리즘에만 의존한다.
  - Big 0 표기법은 어디에나 있으므로 연습을 많이 해두는것이 좋다!!
  ## 보충 자료
  - *O( )* : **상수형 빅-오**, 데이터 수에 상관없이 '연산횟수가 고정'인 유형의 알고리즘을 뜻한다.
    1
  - *O(* log n*)* : **로그형 빅-오**, '데이터 수의 증가율'에 비하여 '연산횟수의 증가율'이 훨씬 낮은 알고리즘
  - *O(* n*)* : **선형 빅-오**, 데이터 수와 연산횟수가 비례하는 알고리즘
  - _O( n\*\* log n _)\* : **선형 로그형 빅-오**, 데이터의 수가 2배로 늘 때, 연산횟수는 2배 조금 넘게 증가하는 알고리즘
  - *O(* 2*)*  : **지수형 빅-오**, '지수적 증가'는 무서운 연산횟수의 증가를 보이기 때문에 다른 방안을 찾아야한다.
- **객체의 빅오(big-O)**
  Object.keys = O(N)
  Object.values = O(N)
  Object.entries = O(N)
  hasOwnProperty = O(1)
- **배열안의 데이터에 접근이 느린이유**
  배열에서 가장 중요한점은 정렬이 되어있는것 이다.
  데이터를 정렬되어 있는 기준이 있다.
  그냥 한 뭉치로 있는 객체와는 다르다.
  정렬이 되어이쓴것이 필요하다면 유용하지만 연산을 하는 시간이 더 걸릴수 있다.
  배열은 대부분 정렬되어 있는 데이터를 위해서 사용한다.
  정렬 되어 있는것이 필요없다면 배열을 사용하지않는것이 좋다.
  섞여있는 데이터를 저장하고 싶을때 배열을 사용해도 되겠지만
  성능을 최적화 하고 싶다면 다른방법이 있다
  정렬되어 있는 것이 필요하더라도, 싱글 링크리스트와 더블링크 리스트처럼
  코드안에 정렬된 구조가 있는 데이터도 있습니다.
  그건 선형 리스트 구조이다. 엘리먼트 마다 특정한 위치에 있고 순서대로 연결되어 있음.
  하지만 때로는 하는 작업에 따라서 배열보다 더빠를수 있다.
  정렬되어 있는 데이터 구조가 배열만 있는 것은 아니다.
  자바스크립트에 그냥 내장되어 있는 구조일 뿐이다.
  정렬이 되어 있는데이터가 필요할때는 배열을 사용할수 있지만.
  성능적으로는 좋지않을수가있음.
  특히 입력과 제거를 할때 그렇다. 복잡해질수 있기 때문이다.
  배열에 있는 데이터를 접근하는것은 매우 빠르다.
  접근은 O(1)으로 상수시간이다 객체와 똑같음.
- **Big-O 배열 메서드**
  - push - O(1)
  - pop - O(1)
  - shift - O(N)
  - unshift - O(N)
  - concat - O(N)
  - slice - O(N)
  - ssplice - O(N)
  - sort - O(N\*log N)
  - forEach/map/filter/reduce/etc. - O(N)
    push와 pop 작업은 상수시간입니다. 배열 맨끝에 추가하고 제거하는 작업은 배열이
    크기와 상관없이 크기가 1이든 10000이든 백만이든 무조건 상수 시간입니다.
    그렇기떄문에 인덱스를 다시 정할 필요도 없고 그냥 끝에만 넣기만 하면 된다.
    반면 Shift와 unshift는 번거롭다. 전부다 인덱스를 다시 정해줘야하기 때문이다.
    배열을 시작에 추가하고 제거한다면 무조건 인덱스를 다시 정리해야합니다.
    만약에 엘리먼트 객수가 10000개, 백만개 이렇게 늘어난다면 다시 인덱스를 정리해야할
    갯수도 따라서 늘어난다.
    그래서 O(n)이다 선형 시간이다.
    concat, slice, splice 는 모두 O(n)이다.
    concat 같은 경우에는 여러 배열을 합쳐줍니다.
    O(N)이라고 하면 배열 하나에 있는 엘리먼트 N갯수에 적용하는 작업이라고 생각할수있는데
    2개가 있다면은 물론 걸리는 시간이 사실상 O(n+m)이고 m은 또 이쓴ㄴ 배열의 크리라고
    할수 있지만 O(n)이라고 표현 하는 것으로 충분하다.
    **객체는 모든것이 빠르지만 정렬되어있지 않고 배열은 정렬되어 있지만.**
    **끝에 추가하고 제거하는 작업이 시작에 추가하고 제거하는 작업보다 휠씬 빠르다는 것이다.**
    **배열은 시작에 넣거나 빼면 처음부터 끝까지 영향받으면서 전부 인덱스를 다시 정리해야합니다.**
    **중간에 넣거나 뺴는것도 똑같다 똑같이 추가하고 제거한 위치에서 뒤로 모두 영향을 받게됩니다.**
- **주파수 카운터** (**FREQUENCY COUNTERS**)
  개체 또는 집합을 사용하여 값/값의 빈도를 수집한다.
  종종 배열/문자열을 사용하여 중첩 루프 또는 0(n^2)작접의 필요성을 피할수있다.
  ex) 두개의 배열을 허용하는 same라는 함수를 작성합니다.
  배열의 모든값이 두번째 배열의 해당값을 제곱한 경우 함수는 true를 반환해야 합니다.
  값의 빈도는 동일해야 합니다.
  ```css
  same([1,2,3], [4,1,9]) // true
  same([1,2,3], [1,9]) // false
  same([1,2,1], [4,4,1]) // false (must be same frequency)
  ```
  ```css
  // 해결책
  function same(arr1, arr2){
      if(arr1.length !== arr2.length){
          return false;
      }
      for(let i = 0; i < arr1.length; i++){
          let correctIndex = arr2.indexOf(arr1[i] ** 2)
          if(correctIndex === -1) {
              return false;
          }
          arr2.splice(correctIndex,1)
      }
      return true
  }
  // **시간 복잡도 - N^2**
  ```
- **아나그램** (**ANAGRAMS**)
  두개의 문자열이 주어지면 두번쨰 문자열이 첫번쨰 문자열의 아나그램인지 확인하는 함수를 작성하세요 아나 그램은 iceman에서 형성된 cinema와 같은 다른 사람의 문자열을 재배열하여 형성된 단어, 구 또는 이름이다.
  ```css
  validAnagram('', '') // true
  validAnagram('aaz', 'zza') // false
  validAnagram('anagram', 'nagaram') // true
  validAnagram("rat","car") // false) // false
  validAnagram('awesome', 'awesom') // false
  validAnagram('qwerty', 'qeywrt') // true
  validAnagram('texttwisttime', 'timetwisttext') // true
  ```
- **다중 포인터**
  인덱스 또는 위치에 해당하고 특정 조건에 따라 시작, 끝 또는 중간으로 이동하는 포인터 또는 값 생성
  최소한의 공간 복잡성으로 문제를 해결하는데 매우 효율적이다.
  ex) 정수의 정렬된 배열을 받아들이는 sumZero 라는 함수를 작성하십시오.
  함수는 합계가 0인 첫번쨰 쌍을 찾아야합니다. 합계가 0 이거나 쌍이 존재하지 않는 경우 정의 되지
  않을 두값을 모두 포함하는 배열을 반환합니다.
  ```css
  sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
  sumZero([-2,0,1,3]) // undefined
  sumZero([1,2,3]) // undefined
  ```
  해결책
  ```css
  function sumZero(arr){
      for(let i = 0; i < arr.length; i++){
          for(let j = i+1; j < arr.length; j++){
              if(arr[i] + arr[j] === 0){
                  return [arr[i], arr[j]];
              }
          }
      }
  }
  // 시간복잡도 0(N^2)
  // 공간 복잡도 0(1)
  or
  function sumZero(arr){
      let left = 0;
      let right = arr.length - 1;
      while(left < right){
          let sum = arr[left] + arr[right];
          if(sum === 0){
              return [arr[left], arr[right]];
          } else if(sum > 0){
              right--;
          } else {
              left++;
          }
      }
  }
   // 시간 복잡도 0(N)
   // 공간 복잡도 0(1)
  ```
- **슬라이딩 윈도우** (**SLIDING WINDOW**)
  이패턴은 한위치에서 다른 위치로 배열 또는 숫자가 될수 있는 창을 만드는것을 포함합니다.
  특정 조건에 따라 창이 커지거나 닫힙니다(새창이 생성됨)
  배열/문자열 등의 데이터 하위 집합을 추적하는데 매우 유용하다.
  ex) 정수 배열과 n이라는 숫자를 허용하는 maxSuvarraySum이라는 함수를 작성 하세요.
  함수는 배열에 있는 n개의 연ㅅ혹 요소의 최대합을 계산해야합니다.
  ```css
  maxSubarraySum([1,2,5,2,8,1,5],2) // 10
  maxSubarraySum([1,2,5,2,8,1,5],4) // 17
  maxSubarraySum([4,2,1,6],1) // 6
  maxSubarraySum([4,2,1,6,2],4) // 13
  maxSubarraySum([],4) // null
  ```
  해결책
  ```css
  function maxSubarraySum(arr, num) {
    if ( num > arr.length){
      return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++){
      temp = 0;
      for (let j = 0; j < num; j++){
        temp += arr[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
  시간 복잡도 0(N^2)
  or
  function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  시간 복잡도 0(n)
  ```
- **분할 및 정복**(**Divide and Conquer**)
  패턴은 데이터 세트를 더작은 청크로 나눈 다음 데이터 하위집합으로 프로세스를 반복하는것
  포함됩니다
  이 패턴은 시간복잡성을 크게 줄일수있습니다
  ex) 정렬된 정수 배열이 주어지면 값을 받아들이고 함수에 전달된 값이 있는 인덱스를 반환하는 search라는 함수를 작성 하세여 값을 찾을수 없다면 -1을 반환합니다.

  ```css
  search([1,2,3,4,5,6],4) // 3
  search([1,2,3,4,5,6],6) // 5
  search([1,2,3,4,5,6],11) // -1
  ```

  해결책

  ```css
  function search(arr, val){
      for(let i = 0; i < arr.length; i++){
          if(arr[i] === val){
              return i;
          }
      }
      return -1;
  }
  선형 검색
  시간 복잡도 0(N)
  OR
  function search(array, val) {

      let min = 0;
      let max = array.length - 1;

      while (min <= max) {
          let middle = Math.floor((min + max) / 2);
          let currentElement = array[middle];

          if (array[middle] < val) {
              min = middle + 1;
          }
          else if (array[middle] > val) {
              max = middle - 1;
          }
          else {
              return middle;
          }
      }

      return -1;
  }
  이진 검색
  시간복잡도  Log(N)

  ```
    ### 모던 자바스크립트

  https://talented-ox-d47.notion.site/f1f3bc7776e94aadbf37ce52b6a41350
