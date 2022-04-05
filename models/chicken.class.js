class Chicken extends MovableObject {
    y = 360;
    height = 60;
    width = 80;
    IMAGES_WALKING = [
        "img/3.Secuencias_Enemy_basico/Version_Gallinita/1.Ga_paso_derecho.png",
        "img/3.Secuencias_Enemy_basico/Version_Gallinita/2-Ga_centro.png",
        "img/3.Secuencias_Enemy_basico/Version_Gallinita/3.Ga_paso izquierdo.png",
    ];
    IMAGES_DEAD = ["img/3.Secuencias_Enemy_basico/Version_Gallinita/4.G_muerte.png"];

    speed = 0.15 + Math.random() * 0.25;
    energy = 5;
    sound = new Audio("audio/chicken1.mp3");

    constructor() {
        super();
        this.loadImage("img/3.Secuencias_Enemy_basico/Version_Gallinita/1.Ga_paso_derecho.png");
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);

        this.x = 500 + Math.random() * 1500; //Zahl zwischen 200 und 700
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (!this.isDead()) {
                this.moveLeft();
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }
}
