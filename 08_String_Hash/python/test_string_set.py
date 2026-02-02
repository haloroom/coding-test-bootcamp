import sys, io
from BOJ_14425_StringSet import solution

def test_string_set_case1(capsys):
    input_str = "5 11\nbaekjoononlinejudge\nstartlink\ncodeplus\nsundaycoding\ncodingsh\nbaekjoon\ncodeplus\ncodeminus\nstartlink\nstarlink\nsundaycoding\ncodingsh\ncodinghs\nsondaycoding\nstartrink\nicerink"
    sys.stdin = io.StringIO(input_str)
    solution()
    assert capsys.readouterr().out.strip() == "4"

