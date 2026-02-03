const fs = require('fs');

/**
 * Problem: Room Number (BOJ 1475)
 * Description: 
 * 한 세트에 0~9가 하나씩 있다. 6과 9는 호환된다. 
 * 방 번호를 만들기 위해 필요한 최소 세트 수를 구하시오.
 * 
 * Example Input:
 * 9999
 */

function solve(roomNumberStr) {
  const count = new Array(10).fill(0);
  
  for (let char of roomNumberStr) {
    let num = Number(char);
    if (num === 9) num = 6;
    count[num]++;
  }
  
  count[6] = Math.ceil(count[6] / 2);
  
  return Math.max(...count);
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