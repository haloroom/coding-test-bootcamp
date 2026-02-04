const fs = require('fs');

/**
 * Problem: Minimum Spanning Tree (BOJ 1197)
 * 
 * Detailed Description:
 * 그래프가 주어졌을 때, 그 그래프의 최소 스패닝 트리를 구하는 프로그램을 작성하시오.
 * 최소 스패닝 트리란, 주어진 그래프의 모든 정점들을 연결하는 부분 그래프 중에서 그 가중치의 합이 최소인 트리를 말한다.
 * (입력으로 주어지는 그래프는 정점이 V개, 간선이 E개이다.)
 * 
 * Example Input:
 * 3 3
 * 1 2 1
 * 2 3 2
 * 1 3 3
 * 
 * Example Output:
 * 3
 */

/**
 * @param {number} V - 정점 개수 (Integer)
 * @param {number} E - 간선 개수 (Integer)
 * @param {object[]} edges - 간선 정보 객체 배열 (Array of Objects {cost, a, b})
 * @returns {number} - MST 가중치 합
 */
function solve(V, E, edges) {
  // TODO: Implement your solution here
  return 0;
}

function solution() {
  const isTest = process.env.NODE_ENV === 'test';
  const filePath = isTest ? './input.txt' : (process.platform === 'linux' ? '/dev/stdin' : './input.txt');
  
  try {
    const input = fs.readFileSync(filePath).toString().trim().split('\n');
    if (input.length === 0) return;

    const [V, E] = input[0].split(' ').map(Number);
    const edges = [];
    
    for (let i = 1; i <= E; i++) {
      const [a, b, cost] = input[i].split(' ').map(Number);
      edges.push({ cost, a, b });
    }
    
    console.log(solve(V, E, edges));
  } catch (e) {}
}

if (require.main === module) solution();
module.exports = solution;