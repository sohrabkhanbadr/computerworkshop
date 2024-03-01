import turtle

t = turtle.Turtle()

t.fillcolor('yellow')
t.begin_fill()

t.forward(100)
t.right(90)
t.forward(100)
t.right(90)
t.forward(100)
t.right(90)
t.forward(100)


t.end_fill()

turtle.fillcolor('red')
turtle.begin_fill()
# start fill block
# turtle.begin_fill()
 
# all instruction within this 
# block are filled with turtle 
# color as set above
turtle.circle(60)
 
# end fill block
turtle.end_fill()

turtle.done()
     