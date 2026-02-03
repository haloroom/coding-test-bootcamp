const fs = require('fs');

/**
 * Problem: String Set (BOJ 14425)
 * Description: 
 * N개의 문자열 집합 S에 M개의 문자열 중 몇 개가 포함되는지 구하시오.
 * 
 * Example Input:
 * 5 11
 * baekjoononlinejudge
 * ...
 */

function solve(N, M, S_list, check_list) {
  const S = new Set(S_list);
  let count = 0;
  
  for (const word of check_list) {
    if (S.has(word)) {
      count++;
    }
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
    
    // N개의 집합 문자열
    const S_list = [];
    for (let i = 1; i <= N; i++) {
      S_list.push(input[i].trim());
    }
    
    // M개의 검사 문자열
    const check_list = [];
    for (let i = N + 1; i <= N + M; i++) {
      check_list.push(input[i].trim());
    }
    
    console.log(solve(N, M, S_list, check_list));
  } catch (e) {}
}

if (require.main === module) solution();
module.exports = solution;