const solution = require('./BOJ_1931_MeetingRoom');
const fs = require('fs');

describe('BOJ 1931: Meeting Room Assignment', () => {
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
    const input = `11\n1 4\n3 5\n0 6\n5 7\n3 8\n5 9\n6 10\n8 11\n8 12\n2 13\n12 14`;
    readFileSyncSpy = jest.spyOn(fs, 'readFileSync').mockReturnValue(input);

    solution();

    expect(logSpy).toHaveBeenCalledWith(4);
  });

  test('Edge Case: Same start and end time', () => {
    // 시작 시간과 끝나는 시간이 같은 경우도 고려해야 함 (예: 2 2)
    // 정렬 순서(종료 -> 시작)가 중요함.
    const input = `3\n1 3\n8 8\n4 8`;
    readFileSyncSpy = jest.spyOn(fs, 'readFileSync').mockReturnValue(input);

    solution();

    expect(logSpy).toHaveBeenCalledWith(3);
  });
});
