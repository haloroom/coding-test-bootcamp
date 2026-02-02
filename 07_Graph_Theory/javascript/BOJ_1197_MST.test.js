const solution = require('./BOJ_1197_MST');
const fs = require('fs');

describe('BOJ 1197: MST', () => {
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
    const input = `3 3\n1 2 1\n2 3 2\n1 3 3`;
    readFileSyncSpy = jest.spyOn(fs, 'readFileSync').mockReturnValue(input);
    solution();
    expect(logSpy).toHaveBeenCalledWith(3);
  });
});
