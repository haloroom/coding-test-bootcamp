const solution = require('./BOJ_14425_StringSet');
const fs = require('fs');

describe('BOJ 14425: String Set', () => {
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
    const input = `5 11\nbaekjoononlinejudge\nstartlink\ncodeplus\nsundaycoding\ncodingsh\nbaekjoon\ncodeplus\ncodeminus\nstartlink\nstarlink\nsundaycoding\ncodingsh\ncodinghs\nsondaycoding\nstartrink\nicerink`;
    readFileSyncSpy = jest.spyOn(fs, 'readFileSync').mockReturnValue(input);
    solution();
    expect(logSpy).toHaveBeenCalledWith(4);
  });
});
