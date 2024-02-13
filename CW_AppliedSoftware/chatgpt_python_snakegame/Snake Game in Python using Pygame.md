# Snake Game in Python using Pygame

## Overview

This is a simple implementation of the classic Snake game using Python and Pygame. Pygame is a set of Python modules designed for writing video games. The Snake game consists of a snake that moves around the screen, eating food to grow longer. The game ends if the snake collides with its own body.

## Setup and Constants

- `pygame.init()`: Initializes Pygame.
- Constants for screen width and height, grid size, frames per second (FPS), and color definitions.

## Snake Class

- `Snake` class represents the snake in the game.
  - `__init__`: Initializes the snake with default settings.
  - `get_head_position`: Returns the position of the snake's head.
  - `update`: Updates the snake's position based on its direction.
  - `reset`: Resets the snake to its initial state.
  - `render`: Draws the snake on the game surface.

## Food Class

- `Food` class represents the food that the snake eats.
  - `__init__`: Initializes the food with default settings.
  - `randomize_position`: Randomly places the food on the screen.
  - `render`: Draws the food on the game surface.

## Directions

- Constants for different directions (UP, DOWN, LEFT, RIGHT).

## Main Function

- Initializes Pygame clock, screen, and surface.
- Creates instances of `Snake` and `Food`.
- Game loop:
  - Handles Pygame events, such as quitting and key presses.
  - Updates the snake's position.
  - Checks if the snake has eaten the food and adjusts its length.
  - Renders the game surface with the snake and food.
  - Updates the display and controls the game's frame rate using the clock.

## Running the Game

- The game starts by calling the `main()` function.

## Customization

- You can customize the game further by adding features or improving graphics.

Feel free to experiment with the code and add your own enhancements to make the game more interesting!



```python
import pygame
import sys
import random

# Initialize Pygame
pygame.init()

# Constants
WIDTH, HEIGHT = 640, 480
GRID_SIZE = 20
FPS = 10

# Colors
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
RED = (255, 0, 0)

# Snake class
class Snake:
    def __init__(self):
        self.length = 1
        self.positions = [((WIDTH // 2), (HEIGHT // 2))]
        self.direction = random.choice([UP, DOWN, LEFT, RIGHT])
        self.color = RED

    def get_head_position(self):
        return self.positions[0]

    def update(self):
        cur = self.get_head_position()
        x, y = self.direction
        new = (((cur[0] + (x*GRID_SIZE)) % WIDTH), (cur[1] + (y*GRID_SIZE)) % HEIGHT)
        if len(self.positions) > 2 and new in self.positions[2:]:
            self.reset()
        else:
            self.positions.insert(0, new)
            if len(self.positions) > self.length:
                self.positions.pop()

    def reset(self):
        self.length = 1
        self.positions = [((WIDTH // 2), (HEIGHT // 2))]
        self.direction = random.choice([UP, DOWN, LEFT, RIGHT])

    def render(self, surface):
        for p in self.positions:
            pygame.draw.rect(surface, self.color, (p[0], p[1], GRID_SIZE, GRID_SIZE))


# Food class
class Food:
    def __init__(self):
        self.position = (0, 0)
        self.color = WHITE
        self.randomize_position()

    def randomize_position(self):
        self.position = (random.randint(0, (WIDTH//GRID_SIZE)-1) * GRID_SIZE,
                         random.randint(0, (HEIGHT//GRID_SIZE)-1) * GRID_SIZE)

    def render(self, surface):
        pygame.draw.rect(surface, self.color, (self.position[0], self.position[1], GRID_SIZE, GRID_SIZE))


# Directions
UP = (0, -1)
DOWN = (0, 1)
LEFT = (-1, 0)
RIGHT = (1, 0)

def main():
    clock = pygame.time.Clock()
    screen = pygame.display.set_mode((WIDTH, HEIGHT), 0, 32)
    surface = pygame.Surface(screen.get_size())
    surface = surface.convert()

    snake = Snake()
    food = Food()

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_UP:
                    snake.direction = UP
                elif event.key == pygame.K_DOWN:
                    snake.direction = DOWN
                elif event.key == pygame.K_LEFT:
                    snake.direction = LEFT
                elif event.key == pygame.K_RIGHT:
                    snake.direction = RIGHT

        snake.update()
        if snake.get_head_position() == food.position:
            snake.length += 1
            food.randomize_position()

        surface.fill(BLACK)
        snake.render(surface)
        food.render(surface)
        screen.blit(surface, (0, 0))
        pygame.display.update()
        clock.tick(FPS)

if __name__ == "__main__":
    main()

```


    An exception has occurred, use %tb to see the full traceback.
    

    SystemExit
    



```python

```
