import sys, io
from BOJ_11047_Coin0 import solution

def test_coin0_case1(capsys):
    input_str = "10 4200\n1\n5\n10\n50\n100\n500\n1000\n5000\n10000\n50000"
    sys.stdin = io.StringIO(input_str)
    solution()
    captured = capsys.readouterr()
    assert captured.out.strip() == "6"

def test_coin0_case2(capsys):
    input_str = "10 4790\n1\n5\n10\n50\n100\n500\n1000\n5000\n10000\n50000"
    sys.stdin = io.StringIO(input_str)
    solution()
    captured = capsys.readouterr()
    assert captured.out.strip() == "12"
