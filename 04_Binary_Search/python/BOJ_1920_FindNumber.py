import sys

def solution():
    try:
        if not sys.stdin.readline(): return # N
        A = set(map(int, sys.stdin.readline().split()))
        if not sys.stdin.readline(): return # M
        B = list(map(int, sys.stdin.readline().split()))
        
        for num in B:
            print(1 if num in A else 0)
    except ValueError:
        pass

if __name__ == "__main__":
    solution()
