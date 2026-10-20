import pygame
import math as m
import sys

pygame.init()

WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("3D Neon Circles")
clock = pygame.time.Clock()

BLACK = (0, 0, 0)
NUM_CIRCLES = 21

center_x = WIDTH // 2
center_y = HEIGHT // 2
vmin = min(WIDTH, HEIGHT) / 100
tilt = m.cos(m.radians(70))
amplitude = 22 * vmin

time = 0
running = True

while running:
	for event in pygame.event.get():
		if event.type == pygame.QUIT:
			running = False
