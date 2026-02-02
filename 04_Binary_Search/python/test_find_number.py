import sys, io
from BOJ_1920_FindNumber import solution

def test_find_number(capsys):
    input_str = "5\n4 1 5 2 3\n5\n1 3 7 9 5"
    sys.stdin = io.StringIO(input_str)
    solution()
    captured = capsys.readouterr()
    assert captured.out.strip().split() == ['1', '1', '0', '0', '1']

