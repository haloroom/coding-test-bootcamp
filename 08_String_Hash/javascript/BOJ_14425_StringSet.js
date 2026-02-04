const fs = require('fs');

/**
 * Problem: String Set (BOJ 14425)
 * 
 * Detailed Description:
 * 총 N개의 문자열로 이루어진 집합 S가 주어진다. 
 * 입력으로 주어지는 M개의 문자열 중에서 집합 S에 포함되어 있는 것이 총 몇 개인지 구하는 프로그램을 작성하시오.
 * (집합 S의 원소는 중복되지 않는다.)
 * 
 * Example Input:
 * 5 11
 * baekjoononlinejudge
 * startlink
 * codeplus
 * sundaycoding
 * codingsh
 * baekjoon
 * codeplus
 * codeminus
 * startlink
 * starlink
 * sundaycoding
 * codingsh
 * codinghs
 * sondaycoding
 * startrink
 * icerink
 * 
 * Example Output:
 * 4
 */

/**
 * @param {number} N - 집합 S의 크기 (Integer)
 * @param {number} M - 검사할 문자열 개수 (Integer)
 * @param {string[]} S_list - 집합 S에 포함된 문자열 배열 (Array of Strings)
 * @param {string[]} check_list - 검사할 M개의 문자열 배열 (Array of Strings)
 * @returns {number} - 집합 S에 포함된 문자열의 개수
 */
function solve(N, M, S_list, check_list) {
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