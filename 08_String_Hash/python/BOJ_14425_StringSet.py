import sys

def solution():
    try:
        line1 = sys.stdin.readline().split()
        if not line1: return
        N, M = map(int, line1)
        
        S = set()
        for _ in range(N):
            S.add(sys.stdin.readline().strip())
            
        count = 0
        for _ in range(M):
            if sys.stdin.readline().strip() in S:
                count += 1
                
        print(count)
    except ValueError:
        pass

if __name__ == "__main__":
    solution()
