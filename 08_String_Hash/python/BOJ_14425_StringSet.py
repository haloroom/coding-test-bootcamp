import sys

"""
Problem: String Set (BOJ 14425)
Description: 
총 N개의 문자열로 이루어진 집합 S가 주어진다. 
입력으로 주어지는 M개의 문자열 중에서 집합 S에 포함되어 있는 것이 총 몇 개인지 구하는 프로그램을 작성하시오.

Example Input:
5 11
baekjoononlinejudge
startlink
codeplus
sundaycoding
codingsh
baekjoon
codeplus
codeminus
startlink
starlink
sundaycoding
codingsh
codinghs
sondaycoding
startrink
icerink
"""

def solve(N, M, S_list, check_list):
    """
    Args:
        N (int): 집합 S의 크기
        M (int): 검사할 문자열 개수
        S_list (list): 집합 S에 포함된 문자열 리스트
        check_list (list): 검사할 M개의 문자열 리스트
    Returns:
        int: 집합 S에 포함된 문자열의 개수
    """
    S = set(S_list)
    count = 0
    for word in check_list:
        if word in S:
            count += 1
    return count

def solution():
    try:
        line1 = sys.stdin.readline().split()
        if not line1: return
        N, M = map(int, line1)
        
        S_list = []
        for _ in range(N):
            S_list.append(sys.stdin.readline().strip())
            
        check_list = []
        for _ in range(M):
            check_list.append(sys.stdin.readline().strip())
            
        print(solve(N, M, S_list, check_list))
    except ValueError:
        pass

if __name__ == "__main__":
    solution()