import sys, io
from BOJ_1463_MakeOne import solution

def test_make_one_case1(capsys):
    sys.stdin = io.StringIO("2")
    solution()
    assert capsys.readouterr().out.strip() == "1"

def test_make_one_case2(capsys):
    sys.stdin = io.StringIO("10")
    solution()
    assert capsys.readouterr().out.strip() == "3"
