const fs = require('fs');

function solution() {
  const isTest = process.env.NODE_ENV === 'test';
  const filePath = isTest ? './input.txt' : (process.platform === 'linux' ? '/dev/stdin' : './input.txt');
  
  try {
    const input = fs.readFileSync(filePath).toString().trim().split('\n');
    if (input.length === 0) return;

    const [N, M] = input[0].split(' ').map(Number);
    const S = new Set();
    
    // N개의 문자열 집합 저장
    for (let i = 1; i <= N; i++) {
      S.add(input[i].trim());
    }
    
    let count = 0;
    // M개의 검사할 문자열
    for (let i = N + 1; i <= N + M; i++) {
      if (S.has(input[i].trim())) {
        count++;
      }
    }
    
    console.log(count);
  } catch (e) {}
}

if (require.main === module) solution();
module.exports = solution;

