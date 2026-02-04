const fs = require('fs');

/**
 * Problem: Find Number (BOJ 1920)
 * 
 * Detailed Description:
 * N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.
 * (시간 복잡도 주의: O(N)으로 순차 탐색 시 시간 초과 가능성 있음, O(logN) 권장)
 * 
 * Example Input:
 * 5
 * 4 1 5 2 3
 * 5
 * 1 3 7 9 5
 * 
 * Example Output:
 * 1
 * 1
 * 0
 * 0
 * 1
 */

/**
 * @param {number} N - A 리스트의 길이 (Integer)
 * @param {number[]} A_list - 탐색 대상 정수 배열 (Array of Integers)
 * @param {number} M - B 리스트의 길이 (Integer)
 * @param {number[]} B_list - 존재 여부를 확인할 정수 배열 (Array of Integers)
 * @returns {number[]} - B_list의 각 원소가 A_list에 존재하면 1, 아니면 0을 담은 배열
 */
function solve(N, A_list, M, B_list) {
  // TODO: Implement your solution here
  return [];
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