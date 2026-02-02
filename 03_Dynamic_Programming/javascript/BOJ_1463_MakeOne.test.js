const solution = require('./BOJ_1463_MakeOne');
const fs = require('fs');

describe('BOJ 1463: Make One', () => {
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
    readFileSyncSpy = jest.spyOn(fs, 'readFileSync').mockReturnValue("2");
    solution();
    expect(logSpy).toHaveBeenCalledWith(1);
  });

  test('Example 2', () => {
    readFileSyncSpy = jest.spyOn(fs, 'readFileSync').mockReturnValue("10");
    solution();
    expect(logSpy).toHaveBeenCalledWith(3);
  });
});
