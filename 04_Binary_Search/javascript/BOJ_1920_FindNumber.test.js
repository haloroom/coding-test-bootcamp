const solution = require('./BOJ_1920_FindNumber');
const fs = require('fs');

describe('BOJ 1920: Find Number', () => {
  let logSpy;
  let readFileSyncSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    process.env.NODE_ENV = 'test';
  });

  afterEach(() => {
    jest.restoreAllMocks();
    process.env.NODE_ENV = 'development';
  });

  test('Example 1', () => {
    const input = `5\n4 1 5 2 3\n5\n1 3 7 9 5`;
    readFileSyncSpy = jest.spyOn(fs, 'readFileSync').mockReturnValue(input);
    solution();
    // 출력이 여러 줄로 나올 수 있으므로 trim 후 비교
    const calls = logSpy.mock.calls.map(args => args[0]).join('\n');
    const expected = "1\n1\n0\n0\n1";
    
    // 구현에 따라 한번에 출력하거나 나눠서 출력할 수 있음
    expect(calls.replace(/\s+/g, '')).toBe(expected.replace(/\s+/g, ''));
  });
});
