const fs = require('fs');

function solution() {
  // Jest 테스트 환경과 백준 제출 환경 분기 처리
  const isTest = process.env.NODE_ENV === 'test';
  const filePath = isTest ? './input.txt' : (process.platform === 'linux' ? '/dev/stdin' : './input.txt');
  
  try {
    // 테스트 시 fs.readFileSync가 Mocking 되므로 예외 처리 필요
    const input = fs.readFileSync(filePath).toString().trim().split('\n');
    
    if (input.length === 0) return;

    const [N, K] = input[0].split(' ').map(Number);
    const coins = input.slice(1).map(Number);
    
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
    
    console.log(count);
  } catch (e) {
    // Mocking 환경에서의 에러 방지
  }
}

// 직접 실행 시
if (require.main === module) {
  solution();
}

// 테스트 모듈용 export
module.exports = solution;
