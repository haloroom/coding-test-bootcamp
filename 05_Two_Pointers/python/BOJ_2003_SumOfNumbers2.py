import sys

def solution():
    try:
        line1 = sys.stdin.readline().split()
        if not line1: return
        N, M = map(int, line1)
        
        A = list(map(int, sys.stdin.readline().split()))
        
        count = 0
        interval_sum = 0
        end = 0
        
        for start in range(N):
            while interval_sum < M and end < N:
                interval_sum += A[end]
                end += 1
            if interval_sum == M:
                count += 1
            interval_sum -= A[start]
            
        print(count)
    except ValueError:
        pass

if __name__ == "__main__":
    solution()
