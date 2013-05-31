#!/usr/bin/env python
from numpy import *
import sys
import random


# Saves matrix to file
def saveToFile(m , i , len):
	filename = "matrix%dx%d.%d.txt" % (len, len, i)
	f = open(filename, "w")
	f.write(str(m));
	f.write("\n")
	f.close()
	return

size = int(sys.argv[1])
numbers = size * size
matrix = arange(numbers).reshape((size,size))

for i in xrange(0,size):
	#print matrix
	saveToFile(matrix, i, size)
	x = random.randrange(0, size - 1)
	y = random.randrange(0, size - 1)
	r = random.randrange(1, numbers)
	matrix[x][y] = r
