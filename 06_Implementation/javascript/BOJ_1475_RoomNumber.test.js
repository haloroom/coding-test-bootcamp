const solution = require('./BOJ_1475_RoomNumber');
const fs = require('fs');

describe('BOJ 1475: Room Number', () => {
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
    readFileSyncSpy = jest.spyOn(fs, 'readFileSync').mockReturnValue("9999");
    solution();
    expect(logSpy).toHaveBeenCalledWith(2);
  });

  test('Example 2', () => {
    readFileSyncSpy = jest.spyOn(fs, 'readFileSync').mockReturnValue("12635");
    solution();
    expect(logSpy).toHaveBeenCalledWith(1);
  });
});
