import sys
from collections import deque

def dfs(v, graph, visited, result):
    visited[v] = True
    result.append(str(v))
    for i in sorted(graph[v]):
        if not visited[i]:
            dfs(i, graph, visited, result)

def bfs(start, graph, visited, result):
    queue = deque([start])
    visited[start] = True
    while queue:
        v = queue.popleft()
        result.append(str(v))
        for i in sorted(graph[v]):
            if not visited[i]:
                visited[i] = True
                queue.append(i)

def solution():
    try:
        line = sys.stdin.readline().split()
        if not line: return
        N, M, V = map(int, line)
        
        graph = [[] for _ in range(N + 1)]
        
        for _ in range(M):
            a, b = map(int, sys.stdin.readline().split())
            graph[a].append(b)
            graph[b].append(a)
            
        visited_dfs = [False] * (N + 1)
        result_dfs = []
        dfs(V, graph, visited_dfs, result_dfs)
        print(" ".join(result_dfs))
        
        visited_bfs = [False] * (N + 1)
        result_bfs = []
        bfs(V, graph, visited_bfs, result_bfs)
        print(" ".join(result_bfs))
        
    except ValueError:
        pass

if __name__ == "__main__":
    solution()
