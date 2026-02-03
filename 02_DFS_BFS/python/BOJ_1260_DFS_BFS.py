import sys
from collections import deque

"""
Problem: DFS and BFS (BOJ 1260)
Description: 
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
"""

def dfs_recursive(v, graph, visited, result):
    visited[v] = True
    result.append(str(v))
    for i in sorted(graph[v]):
        if not visited[i]:
            dfs_recursive(i, graph, visited, result)

def solve(N, M, V, edges):
    """
    Args:
        N (int): 정점의 개수
        M (int): 간선의 개수
        V (int): 탐색을 시작할 정점의 번호
        edges (list): 간선 정보 [(a, b), ...] 의 리스트
    Returns:
        tuple: (dfs결과 문자열, bfs결과 문자열)
    """
    # Build Graph
    graph = [[] for _ in range(N + 1)]
    for a, b in edges:
        graph[a].append(b)
        graph[b].append(a)
        
    # DFS
    visited_dfs = [False] * (N + 1)
    result_dfs = []
    dfs_recursive(V, graph, visited_dfs, result_dfs)
    
    # BFS
    visited_bfs = [False] * (N + 1)
    result_bfs = []
    queue = deque([V])
    visited_bfs[V] = True
    
    while queue:
        v = queue.popleft()
        result_bfs.append(str(v))
        for i in sorted(graph[v]):
            if not visited_bfs[i]:
                visited_bfs[i] = True
                queue.append(i)
                
    return " ".join(result_dfs), " ".join(result_bfs)

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