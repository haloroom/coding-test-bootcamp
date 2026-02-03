import sys

"""
Problem: Find Number (BOJ 1920)
Description: 
N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.

Example Input:
5
4 1 5 2 3
5
1 3 7 9 5
"""

def solve(N, A_list, M, B_list):
    """
    Args:
        N (int): A 리스트의 길이
        A_list (list): 탐색 대상 정수 리스트
        M (int): B 리스트의 길이
        B_list (list): 존재 여부를 확인할 정수 리스트
    Returns:
        list: B_list의 각 원소가 A_list에 존재하면 1, 아니면 0을 담은 리스트
    """
    A_set = set(A_list)
    result = []
    for num in B_list:
        result.append(1 if num in A_set else 0)
    return result

def solution():
    try:
        if not sys.stdin.readline(): return # N
        A_list = list(map(int, sys.stdin.readline().split()))
        if not sys.stdin.readline(): return # M
        B_list = list(map(int, sys.stdin.readline().split()))
        
        # N과 M은 리스트 길이로 유추 가능하므로 여기선 편의상 len() 사용 가능하지만
        # 명시적으로 전달
        results = solve(len(A_list), A_list, len(B_list), B_list)
        print("\n".join(map(str, results)))
    except ValueError:
        pass

if __name__ == "__main__":
    solution()