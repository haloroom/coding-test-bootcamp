const fs = require('fs');

function solution() {
  const isTest = process.env.NODE_ENV === 'test';
  const filePath = isTest ? './input.txt' : (process.platform === 'linux' ? '/dev/stdin' : './input.txt');
  
  try {
    const input = fs.readFileSync(filePath).toString().trim();
    if (!input) return;

    const count = new Array(10).fill(0);
    
    for (let char of input) {
      let num = Number(char);
      if (num === 9) num = 6;
      count[num]++;
    }
    
    count[6] = Math.ceil(count[6] / 2);
    
    console.log(Math.max(...count));
  } catch (e) {}
}

if (require.main === module) solution();
module.exports = solution;
