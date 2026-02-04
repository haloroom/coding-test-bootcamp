import sys

"""
Problem: Room Number (BOJ 1475)

Detailed Description:
다솜이는 은진이의 옆집에 새로 이사왔다. 다솜이는 자기 방 번호를 플라스틱 세트로 문에 붙이려고 한다. 
한 세트에는 0번부터 9번까지 숫자가 하나씩 들어있다. 
다솜이의 방 번호가 주어졌을 때, 필요한 세트의 개수의 최솟값을 출력하시오.
(단, 6은 9를 뒤집어서 이용할 수 있고, 9는 6을 뒤집어서 이용할 수 있다.)

Example Input:
9999

Example Output:
2
"""

def solve(room_number_str):
    """
    Args:
        room_number_str (str): 방 번호 문자열 (String)
    Returns:
        int: 필요한 세트 개수
    """
    # TODO: Implement your solution here
    pass

def solution():
    try:
        line = sys.stdin.readline().strip()
        if not line: return
        print(solve(line))
    except ValueError:
        pass

if __name__ == "__main__":
    solution()