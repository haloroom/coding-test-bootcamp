const fs = require('fs');

function solution() {
  const isTest = process.env.NODE_ENV === 'test';
  const filePath = isTest ? './input.txt' : (process.platform === 'linux' ? '/dev/stdin' : './input.txt');
  
  try {
    const input = fs.readFileSync(filePath).toString().trim();
    if (!input) return;

    const N = Number(input);
    const dp = new Array(N + 1).fill(0);

    for (let i = 2; i <= N; i++) {
      dp[i] = dp[i - 1] + 1;
      if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
      if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }

    console.log(dp[N]);
  } catch (e) {}
}

if (require.main === module) solution();
module.exports = solution;
