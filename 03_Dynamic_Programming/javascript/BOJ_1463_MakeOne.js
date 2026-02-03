const fs = require('fs');

/**
 * Problem: Make One (BOJ 1463)
 * Description: 
 * 정수 N이 주어졌을 때, 3가지 연산(3나누기, 2나누기, 1빼기)을 사용해 1을 만드는 최소 연산 횟수를 구하시오.
 * 
 * Example Input:
 * 10
 */

function solve(N) {
  const dp = new Array(N + 1).fill(0);

  for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
  return dp[N];
}

function solution() {
  const isTest = process.env.NODE_ENV === 'test';
  const filePath = isTest ? './input.txt' : (process.platform === 'linux' ? '/dev/stdin' : './input.txt');
  
  try {
    const input = fs.readFileSync(filePath).toString().trim();
    if (!input) return;

    const N = Number(input);
    console.log(solve(N));
  } catch (e) {}
}

if (require.main === module) solution();
module.exports = solution;