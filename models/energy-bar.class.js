class EnergyStatusBar extends StatusBar {
    IMAGES = [
        "img/7.Marcadores/Barra/Marcador vida/azul/0_.png",
        "img/7.Marcadores/Barra/Marcador vida/azul/20_.png",
        "img/7.Marcadores/Barra/Marcador vida/azul/40_.png",
        "img/7.Marcadores/Barra/Marcador vida/azul/60_.png",
        "img/7.Marcadores/Barra/Marcador vida/azul/80_.png",
        "img/7.Marcadores/Barra/Marcador vida/azul/100_.png",
    ];
    x = 40;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(100);
    }
}
