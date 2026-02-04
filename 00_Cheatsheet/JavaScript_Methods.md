# JavaScript Coding Test Cheatsheet

코딩 테스트에서 자주 사용되는 JavaScript 문법 및 메서드 모음입니다.

## 1. 배열 (Array)

### 생성 (Creation)
```javascript
const n = 5;
const m = 3;

// 1차원 배열
const arr1 = Array(n).fill(0);                     // [0, 0, 0, 0, 0]
const arr2 = Array.from({length: n}, () => 0);     // [0, 0, 0, 0, 0]
const arr3 = Array.from({length: n}, (_, i) => i); // [0, 1, 2, 3, 4]

// 2차원 배열 (주의: fill로 2차원 배열 생성 시 참조 문제 발생 가능)
const arr4 = [...Array(n)].map(() => Array(m).fill(0)); // n행 m열 0으로 초기화
```

### 정렬 (Sorting)
```javascript
const arr = [3, 1, 4, 1, 5];

// 오름차순 (숫자)
arr.sort((a, b) => a - b); 

// 내림차순 (숫자)
arr.sort((a, b) => b - a);

// 문자열 정렬 (기본)
const strArr = ['banana', 'apple', 'cherry'];
strArr.sort(); 
```

### 필터링 & 매핑 & 리듀스 (Higher-Order Functions)
```javascript
const arr = [1, 2, 3, 4, 5];

// 필터링
const filtered = arr.filter(x => x > 2); // [3, 4, 5]

// 매핑
const mapped = arr.map(x => x * 2);      // [2, 4, 6, 8, 10]

// 합계 (Reduce)
const summed = arr.reduce((acc, cur) => acc + cur, 0); // 15
```

### 최대/최소 (Max/Min)
```javascript
const arr = [1, 5, 2, 4, 3];
const max = Math.max(...arr); // 5
const min = Math.min(...arr); // 1
```

### 복사 (Copying)
```javascript
// 1차원 얕은 복사
const copy1 = [...arr]; 

// 2차원 깊은 복사 (간단한 경우)
const matrix = [[1], [2], [3]];
const copy2 = matrix.map(row => [...row]); 
```

---

## 2. 문자열 (String)

### 분할 & 결합 (Split & Join)
```javascript
const str = "hello world";

const arr = str.split(' ');  // ['hello', 'world']
const joined = arr.join(''); // 'helloworld'
```

### 배열 변환 (To Array)
```javascript
const str = "hello";

// 문자 하나씩 분리하여 배열로
const chars = [...str]; // ['h','e','l','l','o']
```

### 부분 문자열 (Substring/Slice)
```javascript
const str = "hello world";

str.substring(0, 5); // 'hello'
str.slice(0, 5);     // 'hello'
str.slice(-5);       // 'world' (뒤에서부터)
```

### 검색 (Search/Check)
```javascript
const str = "hello world";

str.indexOf('world');     // 6 (없으면 -1)
str.includes('world');    // true
str.startsWith('hello');  // true
str.endsWith('world');    // true
```

### 치환 (Replace)
```javascript
const str = "hello world";

str.replace('world', 'JS');   // 'hello JS' (첫 번째만)
str.replaceAll('l', 'L');     // 'heLLo worLd' (전부)
```

### ASCII 코드 (Char Code)
```javascript
'a'.charCodeAt(0);       // 97
String.fromCharCode(97); // 'a'
```

---

## 3. 자료구조 (Data Structures)

### Set (집합)
중복을 허용하지 않는 값들의 모음입니다. 탐색 속도가 O(1)로 빠릅니다.
```javascript
const set = new Set([1, 2, 2, 3]); // Set(3) { 1, 2, 3 }
set.add(4);
set.has(2);    // true
set.delete(3);
console.log(set.size); // 3

// 배열로 변환
const uniqueArr = [...set];
```

### Map (키-값 쌍)
키와 값을 매핑합니다. 객체(Object)보다 데이터 추가/삭제가 빈번할 때 유리하며, 키 타입에 제한이 없습니다.
```javascript
const map = new Map();
map.set('key', 'value');
console.log(map.get('key')); // 'value'
map.has('key');    // true
map.delete('key');
console.log(map.size);
```

### 빈도수 카운팅 (Frequency Counter)
```javascript
const arr = ['a', 'b', 'a', 'c', 'b', 'a'];
const freq = new Map();

for (const item of arr) {
  freq.set(item, (freq.get(item) || 0) + 1);
}

// Object 사용 시
const obj = {};
for (const item of arr) {
  obj[item] = (obj[item] || 0) + 1;
}
```

---

## 4. 스택 & 큐 (Stack & Queue)

### 스택 (Stack)
JavaScript 배열의 `push`/`pop` 메서드를 사용하면 스택처럼 동작합니다.
```javascript
const stack = [];
stack.push(1);           // 추가
stack.pop();             // 제거 및 반환
const top = stack[stack.length - 1]; // 맨 위 확인 (제거 X)
```

### 큐 (Queue)
`shift()`는 배열의 첫 요소를 제거하고 인덱스를 재정렬하므로 **O(n)** 시간이 소요됩니다. 
시간 복잡도가 중요한 문제에서는 **인덱스**를 사용하거나 **Linked List** 기반으로 직접 구현해야 합니다.

#### 방법 1: shift 사용 (데이터가 적을 때만 사용)
```javascript
const queue = [];
queue.push(1);
queue.shift(); // O(n)
```

#### 방법 2: 인덱스 관리 (추천)
```javascript
// 간단한 배열 기반 큐 구현 (메모리 정리는 안 됨)
const queue2 = [];
let front = 0;

queue2.push(1);
const item = queue2[front++];
```

#### 방법 3: Class 구현 (가장 효율적)
```javascript
class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }
  
  push(item) {
    this.items[this.rear] = item;
    this.rear++;
  }
  
  shift() {
    if (this.size === 0) return undefined;
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  
  get size() {
    return this.rear - this.front;
  }
  
  isEmpty() {
    return this.size === 0;
  }
}
```

---

## 5. 우선순위 큐 (Heap)

JavaScript는 내장 `PriorityQueue`나 `Heap`이 없으므로 직접 구현해야 합니다.

### Min Heap 구현
```javascript
class MinHeap {
  constructor() {
    this.heap = [];
  }
  
  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  
  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();
    
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }
  
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      
      [this.heap[parentIndex], this.heap[index]] = 
        [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }
  
  bubbleDown() {
    let index = 0;
    while (index * 2 + 1 < this.heap.length) {
      let minIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      
      if (rightIndex < this.heap.length && 
          this.heap[rightIndex] < this.heap[minIndex]) {
        minIndex = rightIndex;
      }
      
      if (this.heap[index] <= this.heap[minIndex]) break;
      
      [this.heap[index], this.heap[minIndex]] = 
        [this.heap[minIndex], this.heap[index]];
      index = minIndex;
    }
  }
  
  size() {
    return this.heap.length;
  }
  
  isEmpty() {
    return this.heap.length === 0;
  }
}
```

---

## 6. 유용한 알고리즘 & 테크닉 (Tips)

### 구조 분해 할당 & 스왑
```javascript
// 구조 분해 할당
const [a, b, c] = [1, 2, 3];
const {x, y} = {x: 10, y: 20};

// 값 교환 (Swap)
let p = 1, q = 2;
[p, q] = [q, p];
```

### 2차원 배열 순회 및 방향 탐색
```javascript
// 2차원 배열 순회
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    // matrix[i][j]
  }
}

// 4방향 탐색 (상하좌우)
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 0; i < 4; i++) {
  const nx = x + dx[i];
  const ny = y + dy[i];
  
  if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
    // 유효한 좌표 처리
  }
}

// 8방향 탐색 (대각선 포함)
// dx = [-1, -1, -1, 0, 0, 1, 1, 1]
// dy = [-1, 0, 1, -1, 1, -1, 0, 1]
```

### 순열 (Permutation)
```javascript
function permutation(arr, n) {
  const result = [];
  
  function perm(picked, rest) {
    if (picked.length === n) {
      result.push([...picked]);
      return;
    }
    
    for (let i = 0; i < rest.length; i++) {
      perm([...picked, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
    }
  }
  
  perm([], arr);
  return result;
}
```

### 조합 (Combination)
```javascript
function combination(arr, n) {
  const result = [];
  
  function comb(picked, start) {
    if (picked.length === n) {
      result.push([...picked]);
      return;
    }
    
    for (let i = start; i < arr.length; i++) {
      comb([...picked, arr[i]], i + 1);
    }
  }
  
  comb([], 0);
  return result;
}
```

### 수학 (Math)
```javascript
// 최대공약수 (GCD)
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// 최소공배수 (LCM)
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// 소수 판별 (Primality Test)
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 에라토스테네스의 체 (Sieve of Eratosthenes)
function sieve(n) {
  const isPrime = Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return isPrime;
}
```