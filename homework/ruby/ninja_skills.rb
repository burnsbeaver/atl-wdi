# # Challenge 1
# a = true
# b = false
# puts a && b
# puts a || b
#
# # Challenge 2
# var_nil = nil
# puts var_nil
# puts "#{var_nil} was here"
# print var_nil
# puts var_nil.class

# Challenge 3
# d = 20
# puts d
# e = 3.2
# puts e
# d = e
# puts d

# Challege 4
# christine = "Hi, I'm Christine"
# likesTo = "long walks on the beach, kinda."
# tims = "and I like"
# puts "#{christine} #{tims} #{likesTo}"
# g = "2"
# gToNumber = 2
# puts g.to_i + gToNumber

# Challenge 6
# myFirstArray = []
# myFirstArray = ["a", "b", "c", "d", "e", 1, 2, 3, 4]
# puts myFirstArray.last
# puts myFirstArray.first
# myFirstArray[1] = "Joe"
# myFirstArray[2] = 3
# myFirstArray.push(true)
# puts myFirstArray[4].class
# puts myFirstArray.to_s

#Challenge 7
# myFavoriteAnimals = {:ted => "Teddy Bear", :edgar => "Donkey", :burns => "Beaver", :wylie => "Dog", :ramsey => "Ram"}
# myFavoriteAnimals[:edgar] = "Bear"
# favoriteMovie = {}
# favoriteMovie[:movie] = "American Psycho"
# puts favoriteMovie

# Challenge 8
firstRange = (1..10)
firstRange.to_a
secondRange = (1...1000)
# firstRange.each do |number|
#   puts number
# end
# x = 0
# while x < 50
#   print secondRange[x]
#   x += 1
# end
# newArray = []
# firstRange.each do |number|
#   newArray.push(number * 2)
# end
# puts newArray
oddStrings = firstRange.map do |number|
  if number.odd?
    number.to_s
  else
    number
  end
end
puts oddStrings.to_s
