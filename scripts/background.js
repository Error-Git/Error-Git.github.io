const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

const TILE_SOURCES = [
    "./assets/background/tile1.png",
    "./assets/background/tile2.png",
];

const TILE_SIZE = 128;
const DX = -0.5;
const DY = 0.5;

let rows = 0;
let cols = 0;
let grid = [];
let tiles = [];
let offset_x = 0;
let offset_y = 0;

function randomTileIndex() {
    return Math.floor(Math.random() * tiles.length);
}

function createRow() {
    const newRow = [];
    for (let col = 0; col < cols; col++) {
        newRow.push(randomTileIndex());
    }
    return newRow;
}

function createGrid() {
    grid = [];
    for (let row = 0; row < rows; row++) {
        grid.push(createRow());
    }
}

function drawTile(tile_index, col, row) {
    const x = Math.round((col - 1) * TILE_SIZE + offset_x);
    const y = Math.round((row - 1) * TILE_SIZE + offset_y);
    ctx.drawImage(tiles[tile_index], x, y, TILE_SIZE, TILE_SIZE);
}

function updateAndDraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    offset_x += DX;
    offset_y += DY;

    if (offset_x <= -TILE_SIZE) {
        offset_x += TILE_SIZE;
        for (let row = 0; row < rows; row++) {
            grid[row].shift();
            grid[row].push(randomTileIndex());
        }
    }

    if (offset_y >= TILE_SIZE) {
        offset_y -= TILE_SIZE;
        grid.pop();
        grid.unshift(createRow());
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            drawTile(grid[row][col], col, row);
        }
    }

    requestAnimationFrame(updateAndDraw);
}

function loadImage(src) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = src;
    });
}

function loadAllTiles(sources) {
    const promises = sources.map(loadImage);
    return Promise.all(promises);
}

function setup() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    ctx.imageSmoothingEnabled = false;

    rows = Math.ceil(canvas.height / TILE_SIZE) + 2;
    cols = Math.ceil(canvas.width / TILE_SIZE) + 2;

    loadAllTiles(TILE_SOURCES).then((loadedTiles) => {
        tiles = loadedTiles;
        createGrid();
        updateAndDraw();
    });
}

setup();