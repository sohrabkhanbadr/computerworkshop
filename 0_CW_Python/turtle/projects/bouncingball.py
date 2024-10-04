import turtle
import random

# Set up the screen
screen = turtle.Screen()
screen.title("Bouncing Ball Simulation")
screen.bgcolor("lightblue")
screen.setup(width=800, height=600)

# Create the ball
ball = turtle.Turtle()
ball.shape("circle")
ball.color("red")
ball.penup()
ball.speed(0)  # Max speed for movement
ball.goto(0, 0)  # Start in the center

# Ball movement speed
ball.dx = 3  # Change in x direction
ball.dy = 3  # Change in y direction

# Function to reset ball to center
def reset_ball():
    ball.goto(0, 0)
    ball.dx *= -1  # Change direction after reset

# Function to change ball color
def change_color():
    colors = ["red", "blue", "green", "purple", "orange", "yellow"]
    ball.color(random.choice(colors))

# Key bindings
screen.listen()
screen.onkey(reset_ball, "r")  # Press 'r' to reset the ball
screen.onkey(change_color, "space")  # Press space to change the ball's color

# Main game loop
while True:
    # Move the ball
    ball.setx(ball.xcor() + ball.dx)
    ball.sety(ball.ycor() + ball.dy)

    # Bounce off the left and right walls
    if ball.xcor() > 390 or ball.xcor() < -390:
        ball.dx *= -1  # Reverse direction

    # Bounce off the top and bottom walls
    if ball.ycor() > 290 or ball.ycor() < -290:
        ball.dy *= -1  # Reverse direction

# Keep the window open
screen.mainloop()
