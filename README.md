# ⛺ Coding Test Bootcamp

![Python](https://img.shields.io/badge/Python-3.8%2B-blue?logo=python&logoColor=white)
![Pytest](https://img.shields.io/badge/Test-Pytest-green?logo=pytest&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Node.js-yellow?logo=javascript&logoColor=white)
![Jest](https://img.shields.io/badge/Test-Jest-red?logo=jest&logoColor=white)

코딩 테스트 준비를 위한 알고리즘 학습 및 자동 테스트 환경 저장소입니다.  
8가지 핵심 알고리즘 카테고리별로 개념 정리와 문제 풀이를 제공하며, **Pytest**와 **Jest**를 이용한 로컬 자동 채점을 지원합니다.

## 📚 Curriculum & Progress

| # | Topic | Description | Link |
|:-:|:---|:---|:---:|
| 00 | **Cheatsheet** | 언어별 문법 및 팁 정리 | [Go](./00_Cheatsheet/) |
| 01 | **Greedy** | 탐욕적 선택 속성, 정렬, 우선순위 큐 | [Go](./01_Greedy/) |
| 02 | **DFS / BFS** | 그래프 탐색, 스택/큐, 재귀 | [Go](./02_DFS_BFS/) |
| 03 | **DP** | 동적 계획법, 메모이제이션, 점화식 | [Go](./03_Dynamic_Programming/) |
| 04 | **Binary Search** | 이분 탐색, 파라메트릭 서치 | [Go](./04_Binary_Search/) |
| 05 | **Two Pointers** | 투 포인터, 슬라이딩 윈도우 | [Go](./05_Two_Pointers/) |
| 06 | **Implementation** | 구현, 시뮬레이션, 완전 탐색 | [Go](./06_Implementation/) |
| 07 | **Graph Theory** | 최단 경로(Dijkstra), MST(Kruskal/Prim) | [Go](./07_Graph_Theory/) |
| 08 | **String & Hash** | 문자열 처리, 해시 테이블, Trie | [Go](./08_String_Hash/) |

---

## 🚀 Test Automation Guide

이 저장소는 로컬에서 테스트 케이스를 검증할 수 있는 환경을 제공합니다.

### 🐍 Python (Pytest)
**요구사항:** Python 3.8+

1. **의존성 설치**
   ```bash
   pip install -r requirements.txt
   ```

2. **테스트 실행 방법**
   * **전체 테스트 실행:**
     ```bash
     pytest
     ```
   * **특정 폴더 실행:**
     ```bash
     pytest 01_Greedy/
     ```
   * **특정 파일 실행:**
     ```bash
     pytest 01_Greedy/python/test_coin0.py
     ```
   * **특정 테스트 함수만 실행:** (파일명 뒤에 `::함수명` 추가)
     ```bash
     pytest 01_Greedy/python/test_coin0.py::test_coin0_case1
     ```
   * **키워드 검색 실행:** (`-k` 옵션)
     ```bash
     # 이름에 'coin'이 포함된 테스트만 실행
     pytest -k coin
     ```

### 🟨 JavaScript (Jest)
**요구사항:** Node.js, NPM

1. **의존성 설치**
   ```bash
   npm install
   ```

2. **테스트 실행 방법**
   * **전체 테스트 실행:**
     ```bash
     npm test
     ```
   * **특정 파일/폴더 실행:** (경로 또는 파일명 일부 입력)
     ```bash
     # 01_Greedy 폴더 내의 테스트 실행
     npm test 01_Greedy
     
     # 파일명에 'Coin'이 들어가는 테스트 실행
     npm test Coin
     ```
   * **특정 테스트 이름 실행:** (`-t` 옵션)
     ```bash
     # 'Example 1'이라는 이름의 테스트 케이스만 실행
     npm test -- -t "Example 1"
     ```

---

## 📝 Usage

### 새로운 솔루션 추가하기
각 카테고리 폴더(`01`~`08`) 아래 언어별 디렉터리(`python`, `javascript`)에 파일을 생성하여 문제를 풀이합니다.

#### Python 규칙
1. `BOJ_문제번호_문제명.py` 형식으로 파일을 생성합니다.
2. `solution()` 함수 안에 풀이 로직을 작성합니다.
3. `test_문제명.py` 파일을 생성하고 `solution`을 import하여 테스트 케이스를 작성합니다.

#### JavaScript 규칙
1. `BOJ_문제번호_문제명.js` 형식으로 파일을 생성합니다.
2. `solution()` 함수를 작성하고 `module.exports = solution;`을 추가합니다.
3. `BOJ_문제번호_문제명.test.js` 파일을 생성하고 `solution`을 require하여 테스트합니다.