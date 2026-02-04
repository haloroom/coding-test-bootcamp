const fs = require('fs');

/**
 * Problem: Room Number (BOJ 1475)
 * 
 * Detailed Description:
 * 다솜이는 은진이의 옆집에 새로 이사왔다. 다솜이는 자기 방 번호를 플라스틱 세트로 문에 붙이려고 한다. 
 * 한 세트에는 0번부터 9번까지 숫자가 하나씩 들어있다. 
 * 다솜이의 방 번호가 주어졌을 때, 필요한 세트의 개수의 최솟값을 출력하시오.
 * (단, 6은 9를 뒤집어서 이용할 수 있고, 9는 6을 뒤집어서 이용할 수 있다.)
 * 
 * Example Input:
 * 9999
 * 
 * Example Output:
 * 2
 */

/**
 * @param {string} roomNumberStr - 방 번호 문자열 (String)
 * @returns {number} - 필요한 세트 개수
 */
function solve(roomNumberStr) {
  // TODO: Implement your solution here
  return 0;
}

function solution() {
  const isTest = process.env.NODE_ENV === 'test';
  const filePath = isTest ? './input.txt' : (process.platform === 'linux' ? '/dev/stdin' : './input.txt');
  
  try {
    const input = fs.readFileSync(filePath).toString().trim();
    if (!input) return;
    
    console.log(solve(input));
  } catch (e) {}
}

if (require.main === module) solution();
module.exports = solution;