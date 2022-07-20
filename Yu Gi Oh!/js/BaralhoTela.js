class BaralhoTela extends Phaser.Scene
{
    constructor()
    {
        super("BaralhoTela");
        this.direita;
        this.esquerda;
        this.carta;
        this.cartas;
        this.contador = 0;
    }
    preload ()
    {   
        this.load.image('backjogo1' , 'assets/backjogo1.jpg');
        this.load.image('home', 'assets/home2.png');
        this.load.image('carta', 'assets/carta.png');
        this.load.spritesheet('baralho', 
            'assets/marvel-cartas.jpg',
            { frameWidth: 202, frameHeight: 320 }
        );
    }
    create ()
    {   
        this.add.image(600, 400, 'backjogo1');
        this.imagem = this.add.image(1160,60,'home');
        this.imagem.setInteractive();
        this.imagem.on('pointerup', this.Tela1,this);

        this.direita = this.add.text(1120,330,">", {color:'white',backgroundColor:'black',fontFamily: 'Cursive',
        fontSize: '100px',padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
        }});
        this.direita.setInteractive();
        this.direita.on('pointerup', this.trocarCartaDireita, this);


        this.esquerda = this.add.text(20,330,"<", {color:'white',backgroundColor:'black',fontFamily: 'Cursive',
        fontSize: '100px',padding: {
            left: 10,
            right: 10,
            top: 10,      
            bottom: 10,
        }});
        this.esquerda.setInteractive();
        this.esquerda.on('pointerup', this.trocarCartaEsquerda,this);

        this.carta = this.add.image(600,400, 'baralho');
    }
    
    Tela1(){
        this.scene.start("TelaInicial");
    }
    trocarCartaDireita()
    {  
       if(this.contador == 16){
           this.contador = 0;
       }
       this.contador++;
       this.carta.setTexture('baralho',this.contador);
    }
    trocarCartaEsquerda()
    { 
        if(this.contador == 0){
            this.contador = 16;
            
        }
        this.contador--;
        this.carta.setTexture('baralho',this.contador);
        
    }
    
    update()
    {
    }
    
}