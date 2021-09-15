def plusMinus(arr):
    pos=0
    neg=0
    zero=0
    for i in arr:
        if i>0:
            pos+=1
        elif i<0:
            neg+=1
        else:
            zero+=1
    print(round((pos/len(arr)),6))
    print(round((neg/len(arr)),6))
    print(round((zero/len(arr)),6))     
    
    
n=int(input().strip())
arr=list(map(int, input().rstrip().split()))
plusMinus(arr)    