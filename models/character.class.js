class Character extends MovableObject {
    height = 280;
    y = 50; //155;
    IMAGES_WALKING = [
        "img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-21.png",
        "img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-22.png",
        "img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-23.png",
        "img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-24.png",
        "img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-25.png",
        "img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-26.png",
    ];
    IMAGES_JUMPING = [
        "img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-31.png",
        "img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-32.png",
        "img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-33.png",
        "img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-34.png",
        "img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-35.png",
        "img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-36.png",
        "img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-37.png",
        "img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-38.png",
        "img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-39.png",
        "img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-40.png",
    ];
    IMAGES_DEAD = [
        "img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-51.png",
        "img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-52.png",
        "img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-53.png",
        "img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-54.png",
        "img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-55.png",
        "img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-56.png",
        "img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-57.png",
    ];
    IMAGES_HURT = [
        "img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-41.png",
        "img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-42.png",
        "img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-43.png",
    ];
    world;
    speed = 10;
    WALKING_AUDIO = new Audio("audio/walking.mp3");
    JUMPING_AUDIO = new Audio("audio/jump.mp3");
    collectedCoins = [];
    collectedBottles = [];

    constructor() {
        super();
        this.loadImage("img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-21.png");
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.animate();
        this.applyGravity();
    }

    animate() {
        setInterval(() => {
            this.WALKING_AUDIO.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x && this.world.movingAllowed()) {
                this.WALKING_AUDIO.play();
                this.otherDirection = false;
                this.moveRight();
            }

            if (this.world.keyboard.LEFT && this.x > 0 && this.world.movingAllowed()) {
                this.WALKING_AUDIO.play();
                this.otherDirection = true;
                this.moveLeft();
            }

            if (
                (this.world.keyboard.UP || this.world.keyboard.SPACE) &&
                !this.isAboveGround() &&
                this.world.movingAllowed()
            ) {
                this.JUMPING_AUDIO.play();
                this.jump();
            }

            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else if ((this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && this.world.movingAllowed()) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 50);
    }

    jump() {
        this.speedY = 30;
    }
}
