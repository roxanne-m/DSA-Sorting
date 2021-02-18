// Problem 1: Understanding Merge Sort

/*
Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

What is the resulting list that will be sorted after 3 recursive calls to mergesort?
What is the resulting list that will be sorted after 16 recursive calls to mergesort?
1: [21, 1, 26, 45, 29, 28, 2, 9] 
2: [21, 1, 26, 45] 
3: [21, 1] 
4: [21]
5: [1]
6: [26, 45]
7: [26]
8: [45]
9: [29, 28, 2, 9]
10: [29, 28]
11: [29]
12: [28]
13: [2, 9]
14: [2]
15: [9]
16: [16, 49, 39, 27, 43, 34, 46, 40]

What are the first 2 lists to be merged?
[1, 21] + [26, 45]

Which two lists would be merged on the 7th merge?
The last two lists: [1, 2, 9, 21, 26, 28, 29, 45] & [16, 27, 34, 39, 40, 43, 46, 49]
*/

