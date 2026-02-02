import sys

def solution():
    try:
        line = sys.stdin.readline().strip()
        if not line: return
        
        count = [0] * 10
        for char in line:
            num = int(char)
            if num == 9: # 9는 6으로 취급
                num = 6
            count[num] += 1
            
        # 6과 9는 서로 호환 가능하므로 합쳐서 2로 나눔 (올림)
        count[6] = (count[6] + 1) // 2
        
        print(max(count))
    except ValueError:
        pass

if __name__ == "__main__":
    solution()
