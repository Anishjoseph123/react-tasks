import React from "react";
const SnakeGame = () => {
  const gameContainer = document.querySelector(".game-container");
  const snake = document.querySelector(".snake");
  const food = document.querySelector(".food");

  let snakeX = 0;
  let snakeY = 0;
  let foodX = 0;
  let foodY = 0;

  let direction = "right";
  const gridSize = 20;

  function moveSnake() {
    if (direction === "right") {
      snakeX += gridSize;
    } else if (direction === "left") {
      snakeX -= gridSize;
    } else if (direction === "down") {
      snakeY += gridSize;
    } else if (direction === "up") {
      snakeY -= gridSize;
    }

    snake.style.left = `${snakeX}px`;
    snake.style.top = `${snakeY}px`;
  }

  function generateRandomPosition() {
    return Math.floor(Math.random() * 15) * gridSize;
  }

  function placeFood() {
    foodX = generateRandomPosition();
    foodY = generateRandomPosition();

    food.style.left = `${foodX}px`;
    food.style.top = `${foodY}px`;
  }

  function checkCollision() {
    if (snakeX === foodX && snakeY === foodY) {
      placeFood();
    }
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" && direction !== "left") {
      direction = "right";
    } else if (event.key === "ArrowLeft" && direction !== "right") {
      direction = "left";
    } else if (event.key === "ArrowDown" && direction !== "up") {
      direction = "down";
    } else if (event.key === "ArrowUp" && direction !== "down") {
      direction = "up";
    }
  });

  placeFood();

  setInterval(() => {
    moveSnake();
    checkCollision();
  }, 200);
  document.body.append(gameContainer);
  return (
    <div>
      <div className="game-container">
        <div className="snake"></div>
        <div className="food"></div>
      </div>
    </div>
  );
};
export default SnakeGame;
