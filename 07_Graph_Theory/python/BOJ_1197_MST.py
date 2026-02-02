import sys

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

def solution():
    try:
        line1 = sys.stdin.readline().split()
        if not line1: return
        V, E = map(int, line1)
        
        edges = []
        for _ in range(E):
            a, b, cost = map(int, sys.stdin.readline().split())
            edges.append((cost, a, b))
            
        edges.sort()
        
        parent = [i for i in range(V + 1)]
        result = 0
        
        for edge in edges:
            cost, a, b = edge
            if find_parent(parent, a) != find_parent(parent, b):
                union_parent(parent, a, b)
                result += cost
                
        print(result)
    except ValueError:
        pass

if __name__ == "__main__":
    solution()
