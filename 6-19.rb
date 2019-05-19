# array = [1,2,3,4,6,7,5,4,3,3]

# # array2 = ["hanging",'with','friends','is','super','fun']

# # TODO: Return the odd numbers from a list of integers.
# #       Use #select.


#PROBLEM 1
# def odd_integers(array)

# array.select{|x| x%2==1 }


# end
# a=odd_integers([1,2,3,4,6,7,5,4,3,3])
# puts a

#----------------------------

#PROBLEM 2
# # TODO: Return the first number from an Array that is less than a particular number - 'limit.'
# #       Use #find.
# def first_under(array, limit)

# array.find{|i| i < limit}






# end
# a= first_under([5,4,3,1,2], 4)
# puts a

#-------------------------------


#PROBLEM 3	
# # # TODO: Take an Array of Strings and return a new Array with an exclamation point appended to each String.
# # #       Use #map.sb
# def add_bang(array)
# array.map{|x| x + "!" }


# end
# bang = add_bang(["hanging",'with','friends','is','super','fun'])
# puts bang

#--------------------------------

#PROBLEM 4
# # TODO: Calculate the sum of an Array of numbers.
# #       Use #reduce.
# def sum(array)
# array.reduce(:+) 

# end
# add = sum([5,10,15])
# puts add


#----------------------------------
#PROBLEM 5
# # TODO: Reorganize an Array of the elements into groups of 3, and then sort each group alphabetically.
# #       Use #each_slice in combination with other enumerable methods.
# def sorted_triples(array)
#   array.each_slice(3) {|a| p a}

# end
# a = sorted_triples([1,2,3,4,5,6,7,8,9])
# puts a


#PROBLEM 6
# # TODO: Returns an array of elements at indices 1, 3, 5, 7, etc.
# #       Use #each_with_index.

# def odd_indexed_elements(array)
#   new_array = []
# array.each_with_index do |item, index| 
#  if (index %2 ==1) 
#  new_array.push(item)
# end
# end
# puts new_array
# end
# a = odd_indexed_elements(["cat","dog","rabbit","pig","bird","mouse"])




