const solution = require('./BOJ_1260_DFS_BFS');
const fs = require('fs');

describe('BOJ 1260: DFS & BFS', () => {
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
    const input = `4 5 1\n1 2\n1 3\n1 4\n2 4\n3 4`;
    readFileSyncSpy = jest.spyOn(fs, 'readFileSync').mockReturnValue(input);
    solution();
    expect(logSpy).toHaveBeenNthCalledWith(1, "1 2 4 3");
    expect(logSpy).toHaveBeenNthCalledWith(2, "1 2 3 4");
  });

  test('Example 2', () => {
    const input = `5 5 3\n5 4\n5 2\n1 2\n3 4\n3 1`;
    readFileSyncSpy = jest.spyOn(fs, 'readFileSync').mockReturnValue(input);
    solution();
    expect(logSpy).toHaveBeenNthCalledWith(1, "3 1 2 5 4");
    expect(logSpy).toHaveBeenNthCalledWith(2, "3 1 4 2 5");
  });
});
