const solution = require('./BOJ_2003_SumOfNumbers2');
const fs = require('fs');

describe('BOJ 2003: Sum of Numbers 2', () => {
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
    const input = `4 2\n1 1 1 1`;
    readFileSyncSpy = jest.spyOn(fs, 'readFileSync').mockReturnValue(input);
    solution();
    expect(logSpy).toHaveBeenCalledWith(3);
  });

  test('Example 2', () => {
    const input = `10 5\n1 2 3 4 2 5 3 1 1 2`;
    readFileSyncSpy = jest.spyOn(fs, 'readFileSync').mockReturnValue(input);
    solution();
    expect(logSpy).toHaveBeenCalledWith(3);
  });
});
