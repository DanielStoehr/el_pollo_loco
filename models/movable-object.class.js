class MovableObject {
    x = 123;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        console.log("moving right");
    }

    moveLeft() {
        setInterval(() => {
            if (this.x < this.width * -1) {
                this.x = canvas.width;
            } else {
                this.x -= this.speed;
            }
        }, 1000 / 60);
    }
}
