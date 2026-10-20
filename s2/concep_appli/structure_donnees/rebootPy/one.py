import math as m 
import os
import time 

# define variable
n = 0.0

# Define fonction
def f_n(n: float) -> float:
    """This is a function which takes <n> as argument"""
    return ((1 / m.sqrt(5)) * (((1 + m.sqrt(5))/2) - ((1 - m.sqrt(5))/2)))

try:
    while True:
        n = input("Enter a number : ")
        if type(n) is float:
            break
        else:
            print("An error occured :)")
except TypeError:
    print("Type error")


print(f"f(n) = {f_n(n)}")

