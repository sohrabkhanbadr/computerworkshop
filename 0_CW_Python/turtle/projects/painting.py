import turtle

# Set up the screen
screen = turtle.Screen()
screen.title("Interactive Drawing App")
screen.bgcolor("white")

# Create the turtle (pen)
pen = turtle.Turtle()
pen.shape("circle")
pen.speed(3)  # Drawing speed
pen.width(3)  # Set pen width

# Color options
colors = ["black", "red", "blue", "green", "purple", "orange"]

# Function to move the pen to the clicked position
def draw(x, y):
    pen.pendown()
    pen.goto(x, y)

# Function to lift the pen and move without drawing (right-click)
def lift_pen(x, y):
    pen.penup()
    pen.goto(x, y)

# Function to clear the screen
def clear_screen():
    pen.clear()

# Function to change the pen color
def change_color():
    current_color = colors.pop(0)  # Get the first color and remove it from the list
    pen.color(current_color)
    colors.append(current_color)  # Add the color back to the end of the list

# Event bindings
screen.listen()
screen.onclick(draw)  # Left-click to draw
screen.onscreenclick(lift_pen, 3)  # Right-click to move without drawing
screen.onkey(clear_screen, "c")  # Press 'c' to clear the screen
screen.onkey(change_color, "space")  # Press space to change color

print("Use the mouse to draw. Right-click to move without drawing. Press 'c' to clear, and 'space' to change color.")

# Main loop
screen.mainloop()
