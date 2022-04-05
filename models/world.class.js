class World {
    canvas;
    ctx;
    level = level1;
    character = new Character();
    keyboard;
    camera_x = 0;
    energyBar = new EnergyStatusBar(100);
    coinBar = new CoinBar(0);
    bottleBar = new BottleBar(0);
    throwableObjects = [];
    endScreen = new Image();
    backgroundSound = new Audio("audio/mexican-background.mp3");

    constructor(canvas, keyboard) {
        this.endScreen.src = "img/9.Intro_OutroImage/_Game over_ screen/3.Game over.png";
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.keyboard = keyboard;
        this.backgroundSound.play();
        this.draw();
        this.setWorld();
        this.run();
    }

    run() {
        setInterval(() => {
            this.checkCollitions();
            this.checkThrowObjects();
            this.checkCollections(this.level.coins, this.character.collectedCoins, this.coinBar);
            this.checkCollections(this.level.bottles, this.character.collectedBottles, this.bottleBar);
            this.checkEndbossContact();
        }, 200);
    }

    checkEndbossContact() {
        this.level.enemies.forEach((enemy) => {
            if (enemy instanceof Endboss && this.character.x > 1300) {
                enemy.hadFirstContact = true;
            }
        });
    }

    checkGameEnd() {
        let result = false;
        this.level.enemies.forEach((enemy) => {
            if (enemy instanceof Endboss && enemy.energy === 0) {
                result = true;
            }
        });
        if (this.character.energy === 0) {
            result = true;
        }
        return result;
    }

    movingAllowed() {
        return !this.character.isDead() && !this.checkGameEnd();
    }

    checkThrowObjects() {
        if (this.keyboard.D && this.character.collectedBottles.length > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.character.collectedBottles.pop();
            this.bottleBar.setPercentage(this.character.collectedBottles.length * 10);
        }
    }

    checkCollitions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround()) {
                enemy.sound.play();
                enemy.hit();
            } else if (this.character.isColliding(enemy) && !enemy.isDead()) {
                this.character.hit();
                this.energyBar.setPercentage(this.character.energy);
            }

            this.throwableObjects.forEach((object) => {
                if (object.isColliding(enemy)) {
                    enemy.sound.play();
                    enemy.hit();
                }
            });
        });
    }

    checkCollections(items, collectedItems, bar) {
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (this.character.isColliding(item)) {
                item.playSound();
                items.splice(i, 1);
                collectedItems.push(item);
                bar.setPercentage(collectedItems.length * 10);
            }
        }
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        if (!this.checkGameEnd()) {
            document.getElementById("restart-button").classList.add("d-none");
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.energyBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);

        if (this.checkGameEnd()) {
            this.showEndScreen();
        }

        this.ctx.translate(-this.camera_x, 0);

        //Draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    showEndScreen() {
        this.ctx.translate(-this.camera_x, 0);
        this.ctx.drawImage(this.endScreen, 0, 0, 720, 480);
        this.ctx.translate(this.camera_x, 0);
        document.getElementById("restart-button").classList.remove("d-none");
    }

    addObjectsToMap(objects) {
        objects.forEach((o) => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            mo.flipImage(this.ctx);
        }
        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            mo.flipImageBack(this.ctx);
        }
    }
}
