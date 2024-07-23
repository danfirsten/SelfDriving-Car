# Self-Driving Car


## Overview

This project demonstrates a basic self-driving car simulation built from scratch using JavaScript without any external libraries. The simulation includes car driving mechanics, artificial sensors for environment detection, collision detection, a custom neural network, and a genetic algorithm for evolving the car's driving abilities.

## Project Demo

[![Project Demo](https://img.youtube.com/vi/uAULUd40EkE/0.jpg)](https://www.youtube.com/watch?v=uAULUd40EkE)

Click the image to watch the video on YouTube.

## Key Features

### Car Driving Mechanics

- Implemented basic physics for acceleration, braking, and turning.
- Simple controls for manual testing and development purposes.

### Artificial Sensors

- Each car is equipped with a set of sensors that emit rays in various directions.
- Sensors measure the distance to the nearest obstacle or car, providing crucial data for decision-making.

### Collision Detection

- Developed a collision detection system that checks for overlaps between the car's bounding box and obstacles or other cars.
- Handles collision response to prevent the car from moving through obstacles.

### Neural Network

- Custom-built neural network to process sensor inputs.
- Decides on the car's actions (accelerate, brake, turn) based on sensor data.

### Genetic Algorithm

- Used a genetic algorithm to evolve the neural network.
- Selects the best-performing cars from each generation, mutates their neural networks, and creates new generations with improved performance.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/danfirsten/SelfDriving-Car.git
    cd selfdriving-car
    ```

2. No external libraries are required.

### Running the Simulation

1. Open `index.html` in your web browser to start the simulation.


