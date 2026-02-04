import sys

"""
Problem: Find Number (BOJ 1920)

Detailed Description:
N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.
(시간 복잡도 주의: O(N)으로 순차 탐색 시 시간 초과 가능성 있음, O(logN) 권장)

Example Input:
5
4 1 5 2 3
5
1 3 7 9 5

Example Output:
1
1
0
0
1
"""

def solve(N, A_list, M, B_list):
    """
    Args:
        N (int): A 리스트의 길이
        A_list (list): 탐색 대상 정수 리스트 (List of Integers)
        M (int): B 리스트의 길이
        B_list (list): 존재 여부를 확인할 정수 리스트 (List of Integers)
    Returns:
        list: B_list의 각 원소가 A_list에 존재하면 1, 아니면 0을 담은 리스트
    """
    # TODO: Implement your solution here
    return []

def solution():
    try:
        if not sys.stdin.readline(): return # N
        A_list = list(map(int, sys.stdin.readline().split()))
        if not sys.stdin.readline(): return # M
        B_list = list(map(int, sys.stdin.readline().split()))
        
        results = solve(len(A_list), A_list, len(B_list), B_list)
        if results:
            print("\n".join(map(str, results)))
    except ValueError:
        pass

if __name__ == "__main__":
    solution()