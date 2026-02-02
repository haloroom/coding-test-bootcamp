import sys, io
from BOJ_2003_SumOfNumbers2 import solution

def test_sum_numbers_case1(capsys):
    input_str = "4 2\n1 1 1 1"
    sys.stdin = io.StringIO(input_str)
    solution()
    assert capsys.readouterr().out.strip() == "3"

def test_sum_numbers_case2(capsys):
    input_str = "10 5\n1 2 3 4 2 5 3 1 1 2"
    sys.stdin = io.StringIO(input_str)
    solution()
    assert capsys.readouterr().out.strip() == "3"

