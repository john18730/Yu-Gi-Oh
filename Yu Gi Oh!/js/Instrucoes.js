class Instrucoes extends Phaser.Scene
{
    constructor()
    {
        super("Instrucoes");
        this.direita;
        this.esquerda;
    }
    preload ()
    {
        this.load.image('home', 'assets/home2.png');
        this.load.image('fun5', 'assets/fun5.png');
    }
    create ()
    {   
        this.add.image(600, 400, 'fun5');
        this.imagem = this.add.image(1160,60,'home');
        this.add.text(125,125, "O jogador deverá apertar o botão Iniciar rodada"
        +"\nLogo ele receberá uma carta assim como o jogador 2"
        +"\nE deverá escolher um atributo para a disputa"
        +"\nLogo ele deverá apertar o botão proxima carta"
        +"\nAmbos os jogadores receberam mais uma carta"
        +"\nEssas cartas seram somadas com as anteriores"
        +"\nE quem somar maior valor de pontos" 
        +"\nno atributo escolhido vencerá a partida!",{color: 'white', backgrounsColor:'red', fontFamily: 'Arial',
        fontSize: '30px', padding: {
            left: 10,
            right: 10,
            top: 10,
            button: 10,    
        }});
        this.imagem.setInteractive();
        this.imagem.on('pointerup', this.Tela1,this);

    }
    iniciar(){
    }
    Tela1(){
        this.scene.start("TelaInicial");
    }
    update()
    {
    }
    
}