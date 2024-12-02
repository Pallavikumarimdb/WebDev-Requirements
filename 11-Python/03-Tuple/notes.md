In this lecture we will learn:

    What are Tuples in Python
    Tuples re immutable
    Methods used with tuples
    When to use tuples over lists?
    What are Sets in Python?
    Properties of Sets


# 1 Tuples:-
Tuple is almost similar to a list in which we can store multiple values.

    Tuples are Immutable and we can change values in them.
    To define a tuple, () round brackets are used.
    We can fetch the values from a tuple using the index value that can be given in a square bracket.
    Tuple will give an error when you tried to change a value in it.


# 2

    count method is used to count the occurrences of an element in a tuple. It counts the number of times that an element is present in a tuple.

e.g., If an element of value 5 is present two times in a tuple, then the count method returns 2.

# 3

    We can use tuples when we want a list of multiple values but we do not want to change it.
    Iteration in the tuple is faster than the list.


# 4 Sets:-

    Set is a collection of unique elements.
    To define the set, we use the {} curly brackets.
    Set never follows the sequence.
    When we print the set, then the sequence of values in output will be different from the sequence of input.
    Duplicate values present in a set will be printed only once in an output.
    Set uses the concept of Hash. Hash is used to improve the performance as it fetches the values as fast as possible.
    Indexing is not supported in sets as it does not follow sequencing.
    Values can not be changed in a set also because index value is not supported.

```py
>>> tup = (21,36,14,25)   --- tuple
>>> tup
(21, 36, 14, 25)
>>> tup[1]
36
>>> tup[1] = 33
Traceback (most recent call last):
  File "<pyshell#3>", line 1, in <module>
    tup[1] = 33
TypeError: 'tuple' object does not support item assignment
>>> s = {22,25,14,21,5}   --- set
>>> s
{5, 14, 21, 22, 25}
>>> s = {25,14,98,63,75,98}
>>> s
{98, 75, 14, 25, 63}
>>> s[2]
Traceback (most recent call last):
  File "<pyshell#8>", line 1, in <module>
    s[2]
TypeError: 'set' object is not subscriptable
>>>
```