import sys, io
from BOJ_1197_MST import solution

def test_mst_case1(capsys):
    input_str = "3 3\n1 2 1\n2 3 2\n1 3 3"
    sys.stdin = io.StringIO(input_str)
    solution()
    assert capsys.readouterr().out.strip() == "3"
