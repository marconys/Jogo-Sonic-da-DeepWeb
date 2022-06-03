class Placar {
    constructor(ctx){
        this.ctx = ctx;
        this.direita = this.ctx.canvas.width;
        this.margem = 10;
        this.largura = 300;
    };    

    desenhar(){

        this.ctx.font="10px Roboto";
        this.ctx.fillStyle="#000"
        this.ctx.fillText("pontos", this.margem - 10, this.margem, this.largura);

        this.ctx.font="10px Roboto";
        this.ctx.fillStyle="#ffff00"
        this.ctx.fillText(pontos, this.margem, this.margem + 15, this.largura);

    };
};

