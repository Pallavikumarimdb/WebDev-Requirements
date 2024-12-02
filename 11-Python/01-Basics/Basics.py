
# Python is an Interpreted Object-Oriented High-level
# does it means we can't do procedurals here??
# Ans: No, We can acc. to our need
# > Hence Python is called an general purpose language

# Basics on Shell
# >>> 2 +3
# 5
# >>> 9-8
# 1
# >>> 4*6
# 24
# >>> 8/4
# 2.0
# >>> 5//2
# 2
# >>> 8+9-10
# 7
# >>> 8+2*3
# 14
# >>> (8+2)*3
# 30
# >>> 2*2*2
# 8
# >>> 2**2
# 8
# >>> 10%3
# 1
# >>> 'PALLAVI'
# 'PALLAVI'
# >>> print('pallavi')
# pallavi
# >>> print('pallavi's laptop)
# SyntaxError
# >>> print("pallavi's laptop")
# >>> print('pallavi "laptop"')
# pallavi "laptop"

# >>> print('pallavi's "laptop"')
# SyntaxError
# >>> print('pallavi\'s "laptop"')
# pallavi's "laptop"

# >>> 'pallavi'+'pallavi'
# 'pallavipallavi'
# >>> 10*'pallavi'
# 'pallavipallavipallavipallavipallavipallavipallavipallavipallavipallavi'
# >>>

# Note: \ means new line in python
# >>> print('c:\docs\pallavi')
# c:\docs
# allavi

# >>> print(r'c:\docs\pallavi')
# c:\docs\pallavi


#  -------------------------->   VARIABLES :  <-----------------------------------

# NOTE: We don't need to define type of variable in python

# >>> 2+3
# 5

# >>> x=2
# >>> x+3
# 5

# >>> y=3
# >>> x+y
# 5

# >>> x=9
# >>> x+y
# 12
# >>> x
# 9
# >>> abc
# error
 
# >>> x+10
# 19
# >>> _+y  (_ means use previous val : Here _ means 19)
# 22

# >>> name='youtube'
# 'youtube'
# >>> name 
# 'youtube'
# >>> name + ' rock'
# 'youtube rock'

# >>> name[0]
# 'y'

# >>> name[-1]
# 'e'
# >>> name[-2]
# 'b'
# >>> name[-7]
# 'y'
# >>> name[0:2]
# 'yo'
# >>> name[1:4]
# 'out'
# >>> name[1:]
# 'outube'
# >>>  name[:4]
# 'yout'
# >>> name[3:10]
# 'tube'

# >>> name[0:3] = 'my'
# TypeError

# NOTE: String in python is immutable means once value is assigned can't be changed

# >>> 'my' + name[3:]
# 'my tube'
# >>> myname = 'Pallavi'
# >>> len(myname)
# 7