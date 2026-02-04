const fs = require('fs');

/**
 * Problem: Coin 0 (BOJ 11047) 
 * 
 * Detailed Description:
 * 준규가 가지고 있는 동전은 총 N종류이고, 각각의 동전은 매우 많이 가지고 있다.
 * 동전을 적절히 사용해서 그 가치의 합을 K로 만들려고 한다. 
 * 이때 필요한 동전 개수의 최솟값을 구하는 프로그램을 작성하시오.
 * (단, 동전의 가치는 오름차순으로 주어지며, i ≥ 2인 경우에 A_i는 A_{i-1}의 배수이다.)
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
 * 
 * Example Output:
 * 6
 */

/**
 * @param {number} N - 동전의 종류 개수 (Integer)
 * @param {number} K - 만들고자 하는 가치의 합 (Integer)
 * @param {number[]} coins - 동전의 가치가 오름차순으로 담긴 배열 (Array of Integers)
 * @returns {number} - 필요한 동전 개수의 최솟값
 */
function solve(N, K, coins) {
  // TODO: Implement your solution here
  let result = 0;
  let total = K;

  for(let i = N-1; i >=0; i--){
    const coin = coins[i];

    if(coin <= total){
      const count = Math.floor(total/coin);
      result += count;
      total %= coin;
    }

    if(total === 0) break;
  }
  // coins.reverse().forEach(coin => {
  //   if(coin <= total) {
  //     const divid = Math.floor(total/coin);
  //     result += divid;
  //     total -= coin * divid;
  //   }
  // })

  return result;
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