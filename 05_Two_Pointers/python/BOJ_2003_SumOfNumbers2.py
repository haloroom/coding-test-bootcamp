import sys

"""
Problem: Sum of Numbers 2 (BOJ 2003)

Detailed Description:
N개의 수로 된 수열 A[1], A[2], …, A[N] 이 있다. 
이 수열의 i번째 수부터 j번째 수까지의 합 A[i] + A[i+1] + … + A[j-1] + A[j]가 M이 되는 경우의 수를 구하는 프로그램을 작성하시오.
(1 ≤ N ≤ 10,000, 1 ≤ M ≤ 300,000,000)

Example Input:
4 2
1 1 1 1

Example Output:
3
"""

def solve(N, M, A):
    """
    Args:
        N (int): 수열의 길이
        M (int): 목표 합
        A (list): 수열 리스트 (List of Integers)
    Returns:
        int: 부분합이 M이 되는 경우의 수
    """
    # TODO: Implement your solution here
    pass

def solution():
    try:
        line1 = sys.stdin.readline().split()
        if not line1: return
        N, M = map(int, line1)
        
        A = list(map(int, sys.stdin.readline().split()))
        
        print(solve(N, M, A))
    except ValueError:
        pass

if __name__ == "__main__":
    solution()