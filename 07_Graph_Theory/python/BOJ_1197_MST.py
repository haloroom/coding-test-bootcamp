import sys

"""
Problem: Minimum Spanning Tree (BOJ 1197)

Detailed Description:
그래프가 주어졌을 때, 그 그래프의 최소 스패닝 트리를 구하는 프로그램을 작성하시오.
최소 스패닝 트리란, 주어진 그래프의 모든 정점들을 연결하는 부분 그래프 중에서 그 가중치의 합이 최소인 트리를 말한다.
(입력으로 주어지는 그래프는 정점이 V개, 간선이 E개이다.)

Example Input:
3 3
1 2 1
2 3 2
1 3 3

Example Output:
3
"""

def solve(V, E, edges):
    """
    Args:
        V (int): 정점 개수
        E (int): 간선 개수
        edges (list): (cost, a, b) 튜플 리스트 (List of Tuples)
    Returns:
        int: MST 가중치 합
    """
    # TODO: Implement your solution here
    pass

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