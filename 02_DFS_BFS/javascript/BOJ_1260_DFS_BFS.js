const fs = require('fs');

/**
 * Problem: DFS and BFS (BOJ 1260)
 * 
 * Detailed Description:
 * 그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 
 * 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 
 * 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.
 * 
 * Example Input:
 * 4 5 1
 * 1 2
 * 1 3
 * 1 4
 * 2 4
 * 3 4
 * 
 * Example Output:
 * 1 2 4 3
 * 1 2 3 4
 */

/**
 * @param {number} N - 정점의 개수 (Integer)
 * @param {number} M - 간선의 개수 (Integer)
 * @param {number} V - 탐색을 시작할 정점의 번호 (Integer)
 * @param {number[][]} edges - 간선 정보 [[a, b], ...] 2차원 배열 (Array of Arrays)
 * @returns {object} - { dfs: string, bfs: string } 형태의 결과 객체
 */
function solve(N, M, V, edges) {
  // TODO: Implement your solution here
  return { dfs: "", bfs: "" };
}

function solution() {
  const isTest = process.env.NODE_ENV === 'test';
  const filePath = isTest ? './input.txt' : (process.platform === 'linux' ? '/dev/stdin' : './input.txt');
  
  try {
    const input = fs.readFileSync(filePath).toString().trim().split('\n');
    if (input.length === 0) return;

    const [N, M, V] = input[0].split(' ').map(Number);
    const edges = [];
    for (let i = 1; i <= M; i++) {
        edges.push(input[i].split(' ').map(Number));
    }

    const result = solve(N, M, V, edges);
    console.log(result.dfs);
    console.log(result.bfs);
  } catch (e) {}
}

if (require.main === module) solution();
module.exports = solution;