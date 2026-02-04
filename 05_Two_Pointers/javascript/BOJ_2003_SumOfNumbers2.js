const fs = require('fs');

/**
 * Problem: Sum of Numbers 2 (BOJ 2003)
 * 
 * Detailed Description:
 * N개의 수로 된 수열 A[1], A[2], …, A[N] 이 있다. 
 * 이 수열의 i번째 수부터 j번째 수까지의 합 A[i] + A[i+1] + … + A[j-1] + A[j]가 M이 되는 경우의 수를 구하는 프로그램을 작성하시오.
 * (1 ≤ N ≤ 10,000, 1 ≤ M ≤ 300,000,000)
 * 
 * Example Input:
 * 4 2
 * 1 1 1 1
 * 
 * Example Output:
 * 3
 */

/**
 * @param {number} N - 수열의 길이 (Integer)
 * @param {number} M - 목표 합 (Integer)
 * @param {number[]} A - 수열 배열 (Array of Integers)
 * @returns {number} - 부분합이 M이 되는 경우의 수
 */
function solve(N, M, A) {
  // TODO: Implement your solution here
  return 0;
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