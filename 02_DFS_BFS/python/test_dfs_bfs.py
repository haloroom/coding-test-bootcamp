import sys, io
from BOJ_1260_DFS_BFS import solution

def test_dfs_bfs_case1(capsys):
    input_str = "4 5 1\n1 2\n1 3\n1 4\n2 4\n3 4"
    sys.stdin = io.StringIO(input_str)
    solution()
    captured = capsys.readouterr()
    assert captured.out.strip() == "1 2 4 3\n1 2 3 4"

def test_dfs_bfs_case2(capsys):
    input_str = "5 5 3\n5 4\n5 2\n1 2\n3 4\n3 1"
    sys.stdin = io.StringIO(input_str)
    solution()
    captured = capsys.readouterr()
    assert captured.out.strip() == "3 1 2 5 4\n3 1 4 2 5"
