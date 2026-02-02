const fs = require('fs');

function solution() {
  const isTest = process.env.NODE_ENV === 'test';
  const filePath = isTest ? './input.txt' : (process.platform === 'linux' ? '/dev/stdin' : './input.txt');
  
  try {
    const input = fs.readFileSync(filePath).toString().trim().split('\n');
    if (input.length === 0) return;

    const [N, M] = input[0].split(' ').map(Number);
    const A = input[1].split(' ').map(Number);
    
    let count = 0;
    let intervalSum = 0;
    let end = 0;
    
    for (let start = 0; start < N; start++) {
      while (intervalSum < M && end < N) {
        intervalSum += A[end];
        end++;
      }
      if (intervalSum === M) {
        count++;
      }
      intervalSum -= A[start];
    }
    
    console.log(count);
  } catch (e) {}
}

if (require.main === module) solution();
module.exports = solution;

