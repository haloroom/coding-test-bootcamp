const fs = require('fs');

function solution() {
  const isTest = process.env.NODE_ENV === 'test';
  const filePath = isTest ? './input.txt' : (process.platform === 'linux' ? '/dev/stdin' : './input.txt');
  
  try {
    const input = fs.readFileSync(filePath).toString().trim().split('\n');
    if (input.length < 4) return;

    const A = new Set(input[1].split(' ').map(Number));
    const B = input[3].split(' ').map(Number);
    
    const result = [];
    for (const num of B) {
      result.push(A.has(num) ? 1 : 0);
    }
    
    console.log(result.join('\n'));
  } catch (e) {}
}

if (require.main === module) solution();
module.exports = solution;
