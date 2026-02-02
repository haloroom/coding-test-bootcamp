import sys
def solution():
    # 백준 제출 및 테스트 호환을 위해 로직을 함수화
    try:
        line1 = sys.stdin.readline().split()
        if not line1: return # EOF 처리
        N, K = map(int, line1)
        
        coins = []
        for _ in range(N):
            line = sys.stdin.readline().strip()
            if line: coins.append(int(line))
        
        coins.sort(reverse=True)
        count = 0
        
        for coin in coins:
            if K == 0: break
            if coin <= K:
                count += K // coin
                K %= coin
                
        print(count)
    except (ValueError, IndexError):
        pass

if __name__ == "__main__":
    solution()
