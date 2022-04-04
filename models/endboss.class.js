class Endboss extends MovableObject {
    height = 500;
    width = 300;
    y = -40;
    IMAGES_WALKING = [
        "img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png",
        "img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png",
        "img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png",
        "img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png",
        "img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png",
        "img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png",
        "img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png",
        "img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png",
    ];
    IMAGES_HIT = [
        "img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png",
        "img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png",
        "img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png",
    ];
    IMAGES_DEAD = [
        "img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png",
        "img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png",
        "img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png",
    ];
    energy = 15;
    sound = new Audio("audio/chicken2.mp3");

    constructor(x) {
        super();
        this.x = x;
        this.loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HIT);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HIT);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }
}
