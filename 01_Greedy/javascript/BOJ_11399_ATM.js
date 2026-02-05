const fs = require('fs');

/**
 * Problem: ATM (BOJ 11399)
 * 
 * Detailed Description:
 * 인하은행에는 ATM이 1대밖에 없다. 지금 이 ATM앞에 N명의 사람들이 줄을 서있다.
 * 사람은 1번부터 N번까지 번호가 매겨져 있으며, i번 사람이 돈을 인출하는데 걸리는 시간은 P_i분이다.
 * 
 * 사람들이 줄을 서는 순서에 따라서, 돈을 인출하는데 필요한 시간의 합이 달라지게 된다.
 * 예를 들어, 총 5명이 있고, P_1 = 3, P_2 = 1, P_3 = 4, P_4 = 3, P_5 = 2 인 경우를 생각해보자.
 * [1, 2, 3, 4, 5] 순서로 줄을 선다면, 1번 사람은 3분만에 돈을 뽑을 수 있다. 
 * 2번 사람은 3+1 = 4분, 3번 사람은 3+1+4 = 8분, 4번 사람은 3+1+4+3 = 11분, 5번 사람은 3+1+4+3+2 = 13분이 걸리게 된다.
 * 각 사람이 돈을 인출하는데 필요한 시간의 합은 3+4+8+11+13 = 39분이 된다.
 * 
 * 줄을 [2, 5, 1, 4, 3] 순서로 선다면, 각 사람이 돈을 인출하는데 필요한 시간의 합은 32분이 된다. 
 * 이 방법이 돈을 인출하는데 필요한 시간의 합을 최소로 만드는 방법이다.
 * 
 * 줄을 서 있는 사람의 수 N과 각 사람이 돈을 인출하는데 걸리는 시간 P_i가 주어졌을 때, 
 * 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 구하는 프로그램을 작성하시오.
 * 
 * Example Input:
 * 5
 * 3 1 4 3 2
 * 
 * Example Output:
 * 32
 */

/**
 * @param {number} N - 사람의 수 (Integer)
 * @param {number[]} times - 각 사람이 돈을 인출하는데 걸리는 시간 배열 (Array of Integers)
 * @returns {number} - 필요한 시간의 합의 최솟값
 */
function solve(N, times) {
  // 오름차순 정렬: 시간이 적게 걸리는 사람이 먼저 서야 뒷사람들의 대기시간 총합이 최소가 됩니다.
  times.sort((a, b) => a - b);

  let totalSum = 0;      // 최종적으로 구할 각 사람이 돈을 인출하는데 필요한 시간의 합
  let accumulated = 0;   // 현재 순서의 사람이 돈을 인출하기까지 걸린 시간 (대기 시간 + 인출 시간)

  times.forEach((time) => {
    accumulated += time; // 앞사람들의 시간 + 내 인출 시간
    totalSum += accumulated; // 총 합에 더하기
  });

  return totalSum;
}

function solution() {
  const isTest = process.env.NODE_ENV === 'test';
  const filePath = isTest ? './input.txt' : (process.platform === 'linux' ? '/dev/stdin' : './input.txt');

  try {
    const input = fs.readFileSync(filePath).toString().trim().split('\n');
    if (input.length === 0) return;

    const N = Number(input[0]);
    const times = input[1].split(' ').map(Number);

    console.log(solve(N, times));
  } catch (e) {
  }
}

if (require.main === module) solution();
module.exports = solution;
