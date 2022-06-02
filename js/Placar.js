class Placar {
    constructor(ctx){
        this.ctx = ctx;
        this.direita = this.ctx.canvas.width;
        this.margem = 10;
        this.largura = 100;
    };    

    desenhar(){

        this.ctx.font="20px Roboto";
        this.ctx.fillStyle="#ffff00"
        this.ctx.fillText(pontos, this.margem, this.margem + 5, this.largura);

    };
};

