import sys
from collections import deque

"""
Problem: DFS and BFS (BOJ 1260)

Detailed Description:
그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 
단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 
더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.

Example Input:
4 5 1
1 2
1 3
1 4
2 4
3 4

Example Output:
1 2 4 3
1 2 3 4
"""

def solve(N, M, V, edges):
    """
    Args:
        N (int): 정점의 개수
        M (int): 간선의 개수
        V (int): 탐색을 시작할 정점의 번호
        edges (list): 간선 정보 [(a, b), ...] 의 리스트 (List of Tuples/Lists)
    Returns:
        tuple: (dfs결과 문자열, bfs결과 문자열)
    """
    # TODO: Implement your solution here
    return "", ""

def solution():
    try:
        line = sys.stdin.readline().split()
        if not line: return
        N, M, V = map(int, line)
        
        edges = []
        for _ in range(M):
            edges.append(list(map(int, sys.stdin.readline().split())))
            
        dfs_res, bfs_res = solve(N, M, V, edges)
        print(dfs_res)
        print(bfs_res)
        
    except ValueError:
        pass

if __name__ == "__main__":
    solution()