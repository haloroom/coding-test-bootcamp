const fs = require('fs');

function solution() {
  const isTest = process.env.NODE_ENV === 'test';
  const filePath = isTest ? './input.txt' : (process.platform === 'linux' ? '/dev/stdin' : './input.txt');
  
try {
    const input = fs.readFileSync(filePath).toString().trim().split('\n');
    if (input.length === 0) return;

    const [N, M, V] = input[0].split(' ').map(Number);
    const graph = Array.from({ length: N + 1 }, () => []);

    for (let i = 1; i <= M; i++) {
      const [a, b] = input[i].split(' ').map(Number);
      graph[a].push(b);
      graph[b].push(a);
    }

    graph.forEach(adj => adj.sort((a, b) => a - b));

    // DFS
    const visitedDfs = Array(N + 1).fill(false);
    const resultDfs = [];
    
    const dfs = (v) => {
      visitedDfs[v] = true;
      resultDfs.push(v);
      for (const next of graph[v]) {
        if (!visitedDfs[next]) dfs(next);
      }
    };
    dfs(V);
    console.log(resultDfs.join(' '));

    // BFS
    const visitedBfs = Array(N + 1).fill(false);
    const resultBfs = [];
    const queue = [V];
    visitedBfs[V] = true;
    
    while (queue.length > 0) {
      const v = queue.shift();
      resultBfs.push(v);
      for (const next of graph[v]) {
        if (!visitedBfs[next]) {
          visitedBfs[next] = true;
          queue.push(next);
        }
      }
    }
    console.log(resultBfs.join(' '));

  } catch (e) {}
}

if (require.main === module) solution();
module.exports = solution;
