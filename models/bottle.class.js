class Bottle extends MovableObject {
    IMAGES = ["img/6.botella/2.Botella_enterrada1.png", "img/6.botella/2.Botella_enterrada2.png"];
    height = 100;
    width = 100;
    sound = new Audio("audio/bottle.mp3");

    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.loadImage(this.IMAGES[0]);
        this.loadImages(this.IMAGES);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 250);
    }

    playSound() {
        this.sound.play();
    }
}
