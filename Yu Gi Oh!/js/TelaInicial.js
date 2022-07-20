class TelaInicial extends Phaser.Scene
{
constructor(){
    super("TelaInicial")
    this.texto;
    this.imagem;
    this.playgame = new PlayGame();
    }
    preload ()
    {
        this.load.image('backjogo', '/assets/backjogo.jpg');
    }
    create ()
    {
        this.imagem = this.add.image(600,400, 'backjogo');
        var botao = this.add.text(560, 250, "INICIAR",{color: 'white', backgrounsColor:'red', fontFamily: 'Arial',
        fontSize: '30px', padding: {
           left: 10,
           right: 10,
           top: 10,
           button: 10,
        }});
        botao.setInteractive();
        botao.on('pointerup', this.iniciar,this);

        var botao1 = this.add.text(890, 350, "BARALHO",{color: 'black', backgrounsColor:'red', fontFamily: 'Arial',
        fontSize: '30px', padding: {
           left: 10,
           right: 10,
           top: 10,
           button: 10,
        }});
        botao1.setInteractive();
        botao1.on('pointerup', this.iniciarBaralho,this);

        var botao2 = this.add.text(180,350, "INSTRUÇÕES", {color: 'black', backgrounsColor:'red', fontFamily: 'Arial',
        fontSize: '30px', padding: {
            left: 10,
            right: 10,
            top: 10,
            button: 10,
        }});
        botao2.setInteractive();
        botao2.on('pointerup', this.iniciarInstrucoes,this);

    }
    iniciar(){
        this.scene.start('PlayGame');
    }
    iniciarBaralho(){
        this.scene.start('BaralhoTela');
    }
    iniciarInstrucoes(){
        this.scene.start('Instrucoes');
    }
    update()
    {
    }
}
    
