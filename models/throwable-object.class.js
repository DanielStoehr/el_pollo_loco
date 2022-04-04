class ThrowableObject extends MovableObject {
    height = 60;
    width = 50;

    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.loadImage("img/7.Marcadores/Icono/Botella.png");
        this.throw(x, y);
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }
}
