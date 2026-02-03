const fs = require('fs');

/**
 * Problem: Find Number (BOJ 1920)
 * Description: 
 * N개의 정수 A[1]...A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내시오.
 * 
 * Example Input:
 * 5
 * 4 1 5 2 3
 * 5
 * 1 3 7 9 5
 */

function solve(N, A_list, M, B_list) {
  const A_set = new Set(A_list);
  const result = [];
  
  for (const num of B_list) {
    result.push(A_set.has(num) ? 1 : 0);
  }
  return result;
}

function solution() {
  const isTest = process.env.NODE_ENV === 'test';
  const filePath = isTest ? './input.txt' : (process.platform === 'linux' ? '/dev/stdin' : './input.txt');
  
  try {
    const input = fs.readFileSync(filePath).toString().trim().split('\n');
    if (input.length < 4) return;

    const N = Number(input[0]);
    const A_list = input[1].split(' ').map(Number);
    const M = Number(input[2]);
    const B_list = input[3].split(' ').map(Number);
    
    const results = solve(N, A_list, M, B_list);
    console.log(results.join('\n'));
  } catch (e) {}
}

if (require.main === module) solution();
module.exports = solution;