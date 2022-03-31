class BackgroundObject extends MovableObject {
    width = canvas.width;
    height = canvas.height;
    y = 0;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
    }
}
