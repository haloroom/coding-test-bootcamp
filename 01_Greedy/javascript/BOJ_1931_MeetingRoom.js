const fs = require('fs');

/**
 * Problem: Meeting Room Assignment (BOJ 1931)
 * 
 * Detailed Description:
 * 한 개의 회의실이 있는데 이를 사용하고자 하는 N개의 회의에 대하여 회의실 사용표를 만들려고 한다. 
 * 각 회의 I에 대해 시작시간과 끝나는 시간이 주어져 있고, 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 회의의 최대 개수를 찾아보자. 
 * 단, 회의는 한번 시작하면 중간에 중단될 수 없으며 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다. 
 * 회의의 시작시간과 끝나는 시간이 같을 수도 있다. 이 경우에는 시작하자마자 끝나는 것으로 생각하면 된다.
 * 
 * Example Input:
 * 11
 * 1 4
 * 3 5
 * 0 6
 * 5 7
 * 3 8
 * 5 9
 * 6 10
 * 8 11
 * 8 12
 * 2 13
 * 12 14
 * 
 * Example Output:
 * 4
 */

/**
 * @param {number} N - 회의의 수 (Integer)
 * @param {number[][]} meetings - 각 회의의 [시작시간, 종료시간]을 담은 2차원 배열
 * @returns {number} - 최대 사용할 수 있는 회의의 수
 */
function solve(N, meetings) {
  // TODO: Implement your solution here
  let result = 0;
  const sortedMettings = meetings.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1])
  let endTime = 0
  sortedMettings.forEach(meeting => {
    if(meeting[0] >= endTime){
      result++;
      endTime = meeting[1]
    }
  })

  return result;
}

function solution() {
  const isTest = process.env.NODE_ENV === 'test';
  const filePath = isTest ? './input.txt' : (process.platform === 'linux' ? '/dev/stdin' : './input.txt');
  
  try {
    const input = fs.readFileSync(filePath).toString().trim().split('\n');
    if (input.length === 0) return;

    const N = Number(input[0]);
    const meetings = input.slice(1).map(line => line.split(' ').map(Number));
    
    console.log(solve(N, meetings));
  } catch (e) {
  }
}

if (require.main === module) solution();
module.exports = solution;
