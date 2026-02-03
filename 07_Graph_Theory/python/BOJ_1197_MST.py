import sys

"""
Problem: Minimum Spanning Tree (BOJ 1197)
Description: 
그래프가 주어졌을 때, 그 그래프의 최소 스패닝 트리를 구하는 프로그램을 작성하시오.

Example Input:
3 3
1 2 1
2 3 2
1 3 3
"""

def find_parent(parent, x):
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]

def union_parent(parent, a, b):
    a = find_parent(parent, a)
    b = find_parent(parent, b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b

def solve(V, E, edges):
    """
    Args:
        V (int): 정점 개수
        E (int): 간선 개수
        edges (list): (cost, a, b) 튜플 리스트
    Returns:
        int: MST 가중치 합
    """
    edges.sort()
    parent = [i for i in range(V + 1)]
    result = 0
    
    for edge in edges:
        cost, a, b = edge
        if find_parent(parent, a) != find_parent(parent, b):
            union_parent(parent, a, b)
            result += cost
            
    return result

def solution():
    try:
        line1 = sys.stdin.readline().split()
        if not line1: return
        V, E = map(int, line1)
        
        edges = []
        for _ in range(E):
            a, b, cost = map(int, sys.stdin.readline().split())
            # 정렬 편의를 위해 cost를 0번째로
            edges.append((cost, a, b))
            
        print(solve(V, E, edges))
    except ValueError:
        pass

if __name__ == "__main__":
    solution()