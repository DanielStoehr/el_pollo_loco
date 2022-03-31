class Chicken extends MovableObject {
    y = 360;
    height = 60;
    width = 80;
    IMAGES_WALKING = [
        "img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png",
        "img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png",
        "img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png",
    ];
    speed = 0.15 + Math.random() * 0.25;

    constructor() {
        super();
        this.loadImage(
            "img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png"
        );
        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + Math.random() * 500; //Zahl zwischen 200 und 700
        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 200);
    }
}