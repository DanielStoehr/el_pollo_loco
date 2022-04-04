let level1;

function init_level() {
    level1 = new Level(
        [new Chicken(), new Chicken(), new Chicken(), new Endboss(2300)],

        [new Cloud()],

        [
            new BackgroundObject("img/5.Fondo/Capas/5.cielo_1920-1080px.png", -719, 0),
            new BackgroundObject("img/5.Fondo/Capas/3.Fondo3/2.png", -719),
            new BackgroundObject("img/5.Fondo/Capas/2.Fondo2/2.png", -719),
            new BackgroundObject("img/5.Fondo/Capas/1.suelo-fondo1/2.png", -719),

            new BackgroundObject("img/5.Fondo/Capas/5.cielo_1920-1080px.png", 0, 0),
            new BackgroundObject("img/5.Fondo/Capas/3.Fondo3/1.png", 0),
            new BackgroundObject("img/5.Fondo/Capas/2.Fondo2/1.png", 0),
            new BackgroundObject("img/5.Fondo/Capas/1.suelo-fondo1/1.png", 0),

            new BackgroundObject("img/5.Fondo/Capas/5.cielo_1920-1080px.png", 719, 0),
            new BackgroundObject("img/5.Fondo/Capas/3.Fondo3/2.png", 719),
            new BackgroundObject("img/5.Fondo/Capas/2.Fondo2/2.png", 719),
            new BackgroundObject("img/5.Fondo/Capas/1.suelo-fondo1/2.png", 719),

            new BackgroundObject("img/5.Fondo/Capas/5.cielo_1920-1080px.png", 719 * 2, 0),
            new BackgroundObject("img/5.Fondo/Capas/3.Fondo3/1.png", 719 * 2),
            new BackgroundObject("img/5.Fondo/Capas/2.Fondo2/1.png", 719 * 2),
            new BackgroundObject("img/5.Fondo/Capas/1.suelo-fondo1/1.png", 719 * 2),

            new BackgroundObject("img/5.Fondo/Capas/5.cielo_1920-1080px.png", 719 * 3, 0),
            new BackgroundObject("img/5.Fondo/Capas/3.Fondo3/2.png", 719 * 3),
            new BackgroundObject("img/5.Fondo/Capas/2.Fondo2/2.png", 719 * 3),
            new BackgroundObject("img/5.Fondo/Capas/1.suelo-fondo1/2.png", 719 * 3),
        ],
        2000,
        [
            new Coin(400, 40),
            new Coin(500, 40),
            new Coin(600, 40),
            new Coin(700, 40),
            new Coin(900, 80),
            new Coin(1100, 70),
            new Coin(1500, 100),
            new Coin(1600, 100),
            new Coin(1700, 100),
            new Coin(1800, 100),
        ],
        [
            new Bottle(400, 150),
            new Bottle(500, 150),
            new Bottle(600, 150),
            new Bottle(700, 150),
            new Bottle(800, 150),
            new Bottle(1200, 250),
            new Bottle(1300, 200),
            new Bottle(1400, 200),
            new Bottle(1500, 200),
            new Bottle(1900, 200),
        ]
    );
}
