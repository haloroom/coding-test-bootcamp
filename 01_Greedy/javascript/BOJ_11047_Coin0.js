const fs = require('fs');

/**
 * Problem: Coin 0 (BOJ 11047)
 * Description: 
 * 준규가 소유하고 있는 동전은 총 N종류이고, 각 동전의 가치는 다르다. 
 * 동전을 적절히 사용해서 그 가치의 합을 K로 만들려고 한다. 
 * 이때 필요한 동전 개수의 최솟값을 구하는 프로그램을 작성하시오.
 * 
 * Example Input:
 * 10 4200
 * 1
 * 5
 * 10
 * 50
 * 100
 * 500
 * 1000
 * 5000
 * 10000
 * 50000
 */

function solve(N, K, coins) {
  coins.sort((a, b) => b - a);
  
  let remaining = K;
  let count = 0;
  
  for (let coin of coins) {
    if (remaining === 0) break;
    if (coin <= remaining) {
      count += Math.floor(remaining / coin);
      remaining %= coin;
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

    const [N, K] = input[0].split(' ').map(Number);
    const coins = input.slice(1).map(Number);
    
    console.log(solve(N, K, coins));
  } catch (e) {
  }
}

if (require.main === module) solution();
module.exports = solution;