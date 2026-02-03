const fs = require('fs');

/**
 * Problem: Minimum Spanning Tree (BOJ 1197)
 * Description: 
 * 그래프의 최소 스패닝 트리(MST) 가중치 합을 구하시오.
 * 
 * Example Input:
 * 3 3
 * 1 2 1
 * 2 3 2
 * 1 3 3
 */

function findParent(parent, x) {
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x]);
  }
  return parent[x];
}

function unionParent(parent, a, b) {
  const rootA = findParent(parent, a);
  const rootB = findParent(parent, b);
  if (rootA < rootB) parent[rootB] = rootA;
  else parent[rootA] = rootB;
}

function solve(V, E, edges) {
  // edges: {cost, a, b} 객체 배열
  edges.sort((x, y) => x.cost - y.cost);
  
  const parent = Array.from({ length: V + 1 }, (_, i) => i);
  let result = 0;
  
  for (const edge of edges) {
    if (findParent(parent, edge.a) !== findParent(parent, edge.b)) {
      unionParent(parent, edge.a, edge.b);
      result += edge.cost;
    }
  }
  return result;
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