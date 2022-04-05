class Endboss extends MovableObject {
    height = 500;
    width = 300;
    y = -40;
    IMAGES_IDLE = [
        "img/4.Secuencias_Enemy_Gallinota/2.Atecion-ataque/1.Alerta/G5.png",
        "img/4.Secuencias_Enemy_Gallinota/2.Atecion-ataque/1.Alerta/G6.png",
        "img/4.Secuencias_Enemy_Gallinota/2.Atecion-ataque/1.Alerta/G7.png",
        "img/4.Secuencias_Enemy_Gallinota/2.Atecion-ataque/1.Alerta/G8.png",
        "img/4.Secuencias_Enemy_Gallinota/2.Atecion-ataque/1.Alerta/G9.png",
        "img/4.Secuencias_Enemy_Gallinota/2.Atecion-ataque/1.Alerta/G10.png",
        "img/4.Secuencias_Enemy_Gallinota/2.Atecion-ataque/1.Alerta/G11.png",
        "img/4.Secuencias_Enemy_Gallinota/2.Atecion-ataque/1.Alerta/G12.png",
    ];
    IMAGES_HIT = [
        "img/4.Secuencias_Enemy_Gallinota/3.Herida/G21.png",
        "img/4.Secuencias_Enemy_Gallinota/3.Herida/G22.png",
        "img/4.Secuencias_Enemy_Gallinota/3.Herida/G23.png",
    ];
    IMAGES_DEAD = [
        "img/4.Secuencias_Enemy_Gallinota/4.Muerte/G24.png",
        "img/4.Secuencias_Enemy_Gallinota/4.Muerte/G25.png",
        "img/4.Secuencias_Enemy_Gallinota/4.Muerte/G26.png",
    ];
    IMAGES_WALKING = [
        "img/4.Secuencias_Enemy_Gallinota/1.Caminata/G1.png",
        "img/4.Secuencias_Enemy_Gallinota/1.Caminata/G2.png",
        "img/4.Secuencias_Enemy_Gallinota/1.Caminata/G3.png",
        "img/4.Secuencias_Enemy_Gallinota/1.Caminata/G4.png",
    ];
    energy = 15;
    sound = new Audio("audio/chicken2.mp3");
    hadFirstContact = false;
    speed = 0.5;

    constructor(x) {
        super();
        this.x = x;
        this.loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_HIT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (!this.isDead() && this.hadFirstContact) {
                this.moveLeft();
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HIT);
            } else if (this.hadFirstContact) {
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 200);
    }
}
