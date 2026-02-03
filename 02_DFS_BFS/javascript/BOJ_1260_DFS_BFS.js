const fs = require('fs');

/**
 * Problem: DFS and BFS (BOJ 1260)
 * Description: 
 * 그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오.
 * 
 * Example Input:
 * 4 5 1
 * 1 2
 * 1 3
 * 1 4
 * 2 4
 * 3 4
 */

function solve(N, M, V, edges) {
    const graph = Array.from({ length: N + 1 }, () => []);
    for (const [a, b] of edges) {
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
    
    return { dfs: resultDfs.join(' '), bfs: resultBfs.join(' ') };
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