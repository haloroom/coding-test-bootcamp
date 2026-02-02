import sys, io
from BOJ_1475_RoomNumber import solution

def test_room_number_case1(capsys):
    sys.stdin = io.StringIO("9999")
    solution()
    assert capsys.readouterr().out.strip() == "2"

def test_room_number_case2(capsys):
    sys.stdin = io.StringIO("12635")
    solution()
    assert capsys.readouterr().out.strip() == "1"
