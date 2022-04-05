let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    document.getElementById("start-container").classList.add("d-none");
    document.getElementById("controls").classList.remove("d-none");
    document.getElementById("canvas").classList.remove("d-none");
    canvas = document.getElementById("canvas");
    init_level();
    world = new World(canvas, keyboard);
}

function restart() {
    world.backgroundSound.pause();
    init();
}

window.addEventListener("keydown", (e) => {
    if (e.code === "Space") keyboard.SPACE = true;
    if (e.code === "ArrowLeft") keyboard.LEFT = true;
    if (e.code === "ArrowRight") keyboard.RIGHT = true;
    if (e.code === "ArrowUp") keyboard.UP = true;
    if (e.code === "ArrowDown") keyboard.DOWN = true;
    if (e.code === "KeyD") keyboard.D = true;
});

window.addEventListener("keyup", (e) => {
    if (e.code === "Space") keyboard.SPACE = false;
    if (e.code === "ArrowLeft") keyboard.LEFT = false;
    if (e.code === "ArrowRight") keyboard.RIGHT = false;
    if (e.code === "ArrowUp") keyboard.UP = false;
    if (e.code === "ArrowDown") keyboard.DOWN = false;
    if (e.code === "KeyD") keyboard.D = false;
});

function viewFullscreen() {
    document.getElementById("game-container").requestFullscreen();
}
