const solution = require('./BOJ_11399_ATM');
const fs = require('fs');

describe('BOJ 11399: ATM', () => {
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
    const input = `5\n3 1 4 3 2`;
    readFileSyncSpy = jest.spyOn(fs, 'readFileSync').mockReturnValue(input);

    solution();

    expect(logSpy).toHaveBeenCalledWith(32);
  });
});
