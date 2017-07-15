ary = [1,2,3,4,6,7,5,4,3,3]

array2 = ["hanging",'with','friends','is','super','fun']


# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# TODO: Return the odd numbers from a list of integers.
#       Use #select.
def odd_integers(array)
	array.select{|num| num.odd?}
end

puts odd_integers(ary)


# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# TODO: Return the first number from an Array that is less than a particular number - 'limit.'
#       Use #find.
def first_under(array, limit)
	array.find{|num| num < limit}
end
	

puts first_under(ary, 5)


# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# TODO: Take an Array of Strings and return a new Array with an exclamation point appended to each String.
#       Use #map.
def add_bang(array)
	array.map{|item| item + "!"}
end

puts add_bang(array2)


# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# TODO: Calculate the sum of an Array of numbers.
#       Use #reduce.
def sum(array)
	array.reduce(:+)
end

puts sum(ary)


# # >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# TODO: Reorganize an Array of the elements into groups of 3, and then sort each group alphabetically.
#       Use #each_slice in combination with other enumerable methods.
def sorted_triples(array)
	array.each_slice(3){|item| p item.sort}
end

puts sorted_triples(array2)






# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# TODO: Returns an array of elements at indices 1, 3, 5, 7, etc.
#       Use #each_with_index.
def odd_indexed_elements(array)
	array.select.each_with_index{|num, x| num.odd?}
end

puts odd_indexed_elements(ary)
