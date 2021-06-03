goal of game is to get b = [4,3,2,1]
need to set up move piece function to pop from the end of the start stack array and push it into a new array
a move is legal if the starting value is less than the value of the destination or if the destination is undefined
need to call is legal before move piece runs
to check for win all we need to do is check if the length of b is 4 because if is legal function is working all we need to know is the array length
check for win needs to run after every move