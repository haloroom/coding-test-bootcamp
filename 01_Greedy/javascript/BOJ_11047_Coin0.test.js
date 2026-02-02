const solution = require('./BOJ_11047_Coin0');
const fs = require('fs');

describe('BOJ 11047: Coin 0', () => {
  let logSpy;
  let readFileSyncSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    process.env.NODE_ENV = 'test'; // 테스트 환경 플래그 설정
  });

  afterEach(() => {
    jest.restoreAllMocks();
    process.env.NODE_ENV = 'development';
  });

  test('Example 1', () => {
    const input = `10 4200\n1\n5\n10\n50\n100\n500\n1000\n5000\n10000\n50000`;
    readFileSyncSpy = jest.spyOn(fs, 'readFileSync').mockReturnValue(input);

    solution();

    expect(logSpy).toHaveBeenCalledWith(6);
  });

  test('Example 2', () => {
    const input = `10 4790\n1\n5\n10\n50\n100\n500\n1000\n5000\n10000\n50000`;
    readFileSyncSpy = jest.spyOn(fs, 'readFileSync').mockReturnValue(input);

    solution();

    expect(logSpy).toHaveBeenCalledWith(12);
  });
});
