import sys

"""
Problem: Meeting Room Assignment (BOJ 1931)

Detailed Description:
한 개의 회의실이 있는데 이를 사용하고자 하는 N개의 회의에 대하여 회의실 사용표를 만들려고 한다. 
각 회의 I에 대해 시작시간과 끝나는 시간이 주어져 있고, 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 회의의 최대 개수를 찾아보자. 
단, 회의는 한번 시작하면 중간에 중단될 수 없으며 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다. 
회의의 시작시간과 끝나는 시간이 같을 수도 있다. 이 경우에는 시작하자마자 끝나는 것으로 생각하면 된다.

Example Input:
11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14

Example Output:
4
"""

def solve(N, meetings):
    """
    Args:
        N (int): 회의의 수
        meetings (list): 각 회의의 [시작시간, 종료시간]을 담은 리스트
    Returns:
        int: 최대 사용할 수 있는 회의의 수
    """
    # 1. 종료 시간(x[1])을 기준으로 오름차순 정렬
    # 2. 종료 시간이 같다면 시작 시간(x[0])을 기준으로 오름차순 정렬
    meetings.sort(key=lambda x: (x[1], x[0]))
    
    count = 0
    last_end_time = 0
    
    for start, end in meetings:
        if start >= last_end_time:
            count += 1
            last_end_time = end
            
    return count

def solution():
    try:
        # Read N
        line = sys.stdin.readline().strip()
        if not line: return
        N = int(line)
        
        # Read Meetings
        meetings = []
        for _ in range(N):
            line = sys.stdin.readline().strip()
            if line:
                meetings.append(list(map(int, line.split())))
            
        print(solve(N, meetings))
    except ValueError:
        pass

if __name__ == "__main__":
    solution()
