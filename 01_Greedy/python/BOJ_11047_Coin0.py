import sys

"""
Problem: Coin 0 (BOJ 11047)
Description: 
준규가 소유하고 있는 동전은 총 N종류이고, 각 동전의 가치는 다르다. 
동전을 적절히 사용해서 그 가치의 합을 K로 만들려고 한다. 
이때 필요한 동전 개수의 최솟값을 구하는 프로그램을 작성하시오.

Example Input:
10 4200
1
5
10
50
100
500
1000
5000
10000
50000
"""

def solve(N, K, coins):
    """
    Args:
        N (int): 동전의 종류 개수
        K (int): 만들고자 하는 가치의 합
        coins (list): 동전의 가치가 오름차순으로 담긴 리스트
    Returns:
        int: 필요한 동전 개수의 최솟값
    """
    coins.sort(reverse=True)
    count = 0
    
    for coin in coins:
        if K == 0: break
        if coin <= K:
            count += K // coin
            K %= coin
            
    return count

def solution():
    try:
        line1 = sys.stdin.readline().split()
        if not line1: return
        N, K = map(int, line1)
        
        coins = []
        for _ in range(N):
            line = sys.stdin.readline().strip()
            if line: coins.append(int(line))
            
        print(solve(N, K, coins))
    except ValueError:
        pass

if __name__ == "__main__":
    solution()