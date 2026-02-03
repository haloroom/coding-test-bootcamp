const fs = require('fs');

/**
 * Problem: Sum of Numbers 2 (BOJ 2003)
 * Description: 
 * N개의 수열에서 i번째부터 j번째까지의 합이 M이 되는 경우의 수를 구하시오.
 * 
 * Example Input:
 * 4 2
 * 1 1 1 1
 */

function solve(N, M, A) {
  let count = 0;
  let intervalSum = 0;
  let end = 0;
  
  for (let start = 0; start < N; start++) {
    while (intervalSum < M && end < N) {
      intervalSum += A[end];
      end++;
    }
    if (intervalSum === M) {
      count++;
    }
    intervalSum -= A[start];
  }
  return count;
}

function solution() {
  const isTest = process.env.NODE_ENV === 'test';
  const filePath = isTest ? './input.txt' : (process.platform === 'linux' ? '/dev/stdin' : './input.txt');
  
  try {
    const input = fs.readFileSync(filePath).toString().trim().split('\n');
    if (input.length === 0) return;

    const [N, M] = input[0].split(' ').map(Number);
    const A = input[1].split(' ').map(Number);
    
    console.log(solve(N, M, A));
  } catch (e) {}
}

if (require.main === module) solution();
module.exports = solution;