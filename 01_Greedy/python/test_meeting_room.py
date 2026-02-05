import sys, io
from BOJ_1931_MeetingRoom import solution

def test_meeting_room_example(capsys):
    input_str = "11\n1 4\n3 5\n0 6\n5 7\n3 8\n5 9\n6 10\n8 11\n8 12\n2 13\n12 14"
    sys.stdin = io.StringIO(input_str)
    solution()
    captured = capsys.readouterr()
    assert captured.out.strip() == "4"

def test_meeting_room_same_start_end(capsys):
    """
    시작 시간과 끝나는 시간이 같은 경우도 고려해야 함 (예: 2 2)
    정렬 순서(종료 -> 시작)가 중요함.
    """
    input_str = "3\n1 3\n8 8\n4 8"
    # 정렬 전: [1, 3], [8, 8], [4, 8]
    # 정렬 후: [1, 3], [4, 8], [8, 8]
    # 선택: [1, 3] -> (3 <= 4) -> [4, 8] -> (8 <= 8) -> [8, 8]  => Total 3
    sys.stdin = io.StringIO(input_str)
    solution()
    captured = capsys.readouterr()
    assert captured.out.strip() == "3"

