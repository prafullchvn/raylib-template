const r = require('raylib');

const WIDTH = 600;
const HEIGHT = 600;
const FPS = 60;

const setup = () => {
    r.InitWindow(WIDTH, HEIGHT, "Raylib Program");
    r.SetTargetFPS(FPS);
}

const update = () => {

}

const draw = () => {

}

const isRunning = () => {
    return !r.WindowShouldClose();
}

const tearDown = () => {
    r.CloseWindow();
}

module.exports = { setup, update, draw, isRunning, tearDown };