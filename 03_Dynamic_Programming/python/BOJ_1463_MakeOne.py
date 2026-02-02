import sys

def solution():
    try:
        line = sys.stdin.readline().strip()
        if not line: return
        N = int(line)
        
        dp = [0] * (N + 1)
        
        for i in range(2, N + 1):
            dp[i] = dp[i-1] + 1
            if i % 2 == 0:
                dp[i] = min(dp[i], dp[i//2] + 1)
            if i % 3 == 0:
                dp[i] = min(dp[i], dp[i//3] + 1)
                
        print(dp[N])
    except ValueError:
        pass

if __name__ == "__main__":
    solution()
