import sys

"""
Problem: Make One (BOJ 1463)

Detailed Description:
정수 X에 사용할 수 있는 연산은 다음과 같이 세 가지 이다.
1. X가 3으로 나누어 떨어지면, 3으로 나눈다.
2. X가 2로 나누어 떨어지면, 2로 나눈다.
3. 1을 뺀다.
정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 
연산을 사용하는 횟수의 최솟값을 출력하시오.

Example Input:
10

Example Output:
3
"""

def solve(N):
    """
    Args:
        N (int): 1로 만들고자 하는 정수
    Returns:
        int: 연산 횟수의 최솟값
    """
    # TODO: Implement your solution here
    pass

def solution():
    try:
        line = sys.stdin.readline().strip()
        if not line: return
        N = int(line)
        print(solve(N))
    except ValueError:
        pass

if __name__ == "__main__":
    solution()