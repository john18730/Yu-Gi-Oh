class PlayGame extends Phaser.Scene{

constructor()
{
    super("PlayGame")
    this.texto;
    this.texto1;
    this.carta1p1;
    this.carta2p1;
    this.carta1p2;
    this.carta2p2;
    this.botao;
    this.botao2;
    this.botao3;
    this.imagem;
    this.back;

    
    this.jogo = new Jogo();
    this.j1 = new Jogador();
    this.j2 = new Jogador();
    this.baralho = new Baralho(); 
    
    this.botao_altura;
    this.botao_forca;
    this.botao_velocidade;
    this.botao_peso;
    this.botao_peleas;
    this.selecione;
    this.textoAtributo;
    this.textoAtributo1;
    this.textoVencedor;
    this.textoVencedor1;
    this.atributosPC;
  
    
}

    preload ()
    {
        this.load.image('backjogo3', 'assets/backjogo3.jpg');
        this.load.image('home', 'assets/home2.png');
        this.load.image('carta', 'assets/carta.jpg');
        this.load.image('ygo', 'assets/ygo.png');
        this.load.image('ygo2', 'assets/ygo2.png');
        this.load.spritesheet('baralho', 
            'assets/marvel-cartas.jpg',
            { frameWidth: 202, frameHeight: 320 }
        );
        
    }

    create () 
    {
        this.jogo.jogando = "1";
        this.back = this.add.image(600, 400,'backjogo3')
        this.jogo.iniciarJogo( this.j1,  this.j2,  this.baralho);
        this.imagem = this.add.image(1160,60,'home');
        this.imagem.setInteractive();
        this.imagem.on('pointerup', this.Tela1,this);

        this.botao = this.add.text(20,20,"Iniciar Rodada", {color:'white',backgroundColor:'red',fontFamily: 'Arial',
        fontSize: '30px',padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
        }});
        this.botao.setInteractive();
        
      
        this.botao.on('pointerup', this.iniciar,this);
        this.botao.on('pointerup', this.t,this);
        this.botao.visible = true;
        
        this.carta1p1 = this.add.image(150, 420, 'carta');
        this.carta1p2 = this.add.image(380, 420, 'carta');
        this.carta2p1 = this.add.image(820, 420, 'carta');
        this.carta2p2 = this.add.image(1050, 420, 'carta');

        this.add.image(110, 790, 'ygo'); 
        this.add.image(1090, 565, 'ygo2');


        this.botao2= this.add.text(750,80,"Vencedor", {color:'white',backgroundColor:'blue',fontFamily: 'Arial',
        fontSize: '30px',padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
        }});
        this.botao2.setInteractive();
        this.botao2.on('pointerup', this.chamarJogo,this);
        this.botao2.on('pointerup', this.t2,this);
        this.botao2.on('pointerup', this.k,this);
        this.botao2.visible = false;


        this.botao3 = this.add.text(20,100,"Recomeçar", {color:'white',backgroundColor:'red',fontFamily: 'Arial',
        fontSize: '30px',padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
        }});
        this.botao3.setInteractive();
        this.botao3.on('pointerup', this.teste1,this);
        this.botao3.on('pointerup',this.create ,this);

        this.textoPontos1 = this.add.text(200,690,"P1: 0", {color:'red',backgroundColor:'transparent',fontFamily: 'Arial',
        fontSize: '50px',padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
        }});
        this.textoPontos2 = this.add.text(830,690,"PC: 0", {color:'red',backgroundColor:'transparent',fontFamily: 'Arial',
        fontSize: '50px',padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
        }});
        this.textoVencedor1 = this.add.text(500,20,"", {color:'white',backgroundColor:'red',fontFamily: 'Arial',
        fontSize: '20px',padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
        }});
        
    }
    iniciar()
    {
        this.textoVencedor1.visible=false
        this.jogo.iniciarRodada();
        this.carta1p1.setTexture('baralho', this.j1.carta1.imagem);
        this.carta2p1.setTexture('carta');

        this.carta1p2.setTexture('carta');
        this.carta2p2.setTexture('carta');
        
       if(this.jogo.jogando == "1"){
        this.atributosEscolha();
       }else{
        this.teste();
        this.jogarPC();
        this.SegundaCarta();
        this.F2();
       }
       

    }
    SegundaCarta(){
        this.botao2.visible = true;
        this.jogo.enviarSegundaCarta();
        this.carta1p2.setTexture('baralho', this.j1.carta2.imagem);
        this.carta2p2.setTexture('carta');
        
    }
    Tela1(){
        this.scene.start("TelaInicial");
    }
    teste(){
        this.botao_altura.visible = false;
        this.botao_peso.visible = false;
        this.botao_velocidade.visible = false;
        this.botao_peleas.visible = false;
        this.botao_forca.visible = false;
        this.selecione.visible = false;
    }
    teste1(){
        this.botao2.visible = false;
    }
    texto3(){
        this.textoAtributo.visible = false;
        
    }
    inicio2(){
        this.botao = this.add.text(20,20,"Iniciar Rodada", {color:'white',backgroundColor:'red',fontFamily: 'Arial',
        fontSize: '30px',padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
        }});
        this.botao.setInteractive();
        this.botao.on('pointerup', this.iniciar,this);
        this.botao.on('pointerup', this.texto3,this);
        this.botao.on('pointerup', this.t,this);
    }
    Escolher(atributo)
    { 
        this.jogo.atributo = atributo;   
        console.log(atributo);
    }  
    t(){
        this.botao.visible = false;
    };
    t2(){
        this.botao.visible = true;
        this.botao2.visible = false;
    };
    F(atributo){
        this.textoAtributo = this.add.text(20,20, atributo, {color:'white',backgroundColor:'red',fontFamily: 'Arial',
       fontSize: '20px',padding: {
           left: 10,
           right: 10,
           top: 10,
           bottom: 10,
       }});
       this.textoAtributo.visible = true;
    }
    chamarJogo(){
        this.textoVencedor1.visible=true;
        this.textoVencedor1.setText(this.jogo.calcularVencedor());
        this.carta2p1.setTexture('baralho', this.j2.carta1.imagem);
        this.carta2p2.setTexture('baralho', this.j2.carta2.imagem);
    }
    atributosEscolha(){

        this.botao_altura = this.add.text(350,100,"Altura", {color:'white',backgroundColor:'blue',fontFamily: 'Arial',
        fontSize: '15px',padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
        }});
        this.botao_altura.setInteractive();
        this.botao_altura.on('pointerup', () => this.Escolher("altura"));
        this.botao_altura.on('pointerup', () => this.F("Altura"));
        this.botao_altura.on('pointerup', this.SegundaCarta,this);
        this.botao_altura.on('pointerup', this.inicio2,this);
        this.botao_altura.on('pointerup', this.teste,this);
        this.botao_altura.on('pointerup', this.t,this);
        this.botao_altura.visible = true;

        this.botao_peso = this.add.text(450,100,"Peso", {color:'white',backgroundColor:'blue',fontFamily: 'Arial',
        fontSize: '15px',padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
        }});
        this.botao_peso.setInteractive();
        this.botao_peso.on('pointerup', () => this.Escolher("peso"));
        this.botao_peso.on('pointerup', () => this.F("Peso"));
        this.botao_peso.on('pointerup', this.SegundaCarta,this);
        this.botao_peso.on('pointerup', this.inicio2,this);
        this.botao_peso.on('pointerup', this.teste,this);
        this.botao_peso.on('pointerup', this.t,this);
        this.botao_peso.visible = true;

        this.botao_forca = this.add.text(530,100,"Força", {color:'white',backgroundColor:'blue',fontFamily: 'Arial',
        fontSize: '15px',padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
        }});
        this.botao_forca.setInteractive();
        this.botao_forca.on('pointerup', () => this.Escolher("forca"));
        this.botao_forca.on('pointerup', () => this.F("Força"));
        this.botao_forca.on('pointerup', this.SegundaCarta,this);
        this.botao_forca.on('pointerup', this.inicio2,this);
        this.botao_forca.on('pointerup', this.teste,this);
        this.botao_forca.on('pointerup', this.t,this);
        this.botao_forca.visible = true;

        this.botao_peleas = this.add.text(620,100,"Peleas Ganadas", {color:'white',backgroundColor:'blue',fontFamily: 'Arial',
        fontSize: '15px',padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
        }});
        this.botao_peleas.setInteractive();
        this.botao_peleas.on('pointerup', () => this.Escolher("peleasGanadas"));
        this.botao_peleas.on('pointerup', () => this.F("Peleas Ganadas"));
        this.botao_peleas.on('pointerup', this.SegundaCarta,this);
        this.botao_peleas.on('pointerup', this.inicio2,this);
        this.botao_peleas.on('pointerup', this.teste,this);
        this.botao_peleas.on('pointerup', this.t,this);
        this.botao_peleas.visible = true;

        this.botao_velocidade = this.add.text(790,100,"Velocidade", {color:'white',backgroundColor:'blue',fontFamily: 'Arial',
        fontSize: '15px',padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
        }});
        this.botao_velocidade.setInteractive();
        this.botao_velocidade.on('pointerup', () => this.Escolher("velocidade"));
        this.botao_velocidade.on('pointerup', () => this.F("velocidade"));
        this.botao_velocidade.on('pointerup', this.SegundaCarta,this);
        this.botao_velocidade.on('pointerup', this.inicio2,this);
        this.botao_velocidade.on('pointerup', this.teste,this);
        this.botao_velocidade.on('pointerup', this.t,this);
        this.botao_velocidade.visible = true;

        this.selecione = this.add.text(400,20,"Selecione o Atributo", {color:'white',backgroundColor:'blue',fontFamily: 'Arial',
        fontSize: '35px',padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
        }});
        this.selecione.visible = true;
    }
    jogarPC(){
        
        this.atributosPC = new Array("altura", "peso", "forca", "velocidade", "peleasGanadas");
        var num = Math.trunc(Math.random()*this.atributosPC.length);
        console.log(this.atributosPC[num]);
        return this.atributosPC[num];
    }
    F2(){
        this.textoAtributo1 = this.add.text(20,20, this.jogarPC(), {color:'white',backgroundColor:'red',fontFamily: 'Arial',
        fontSize: '20px',padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
        }});
        this.textoAtributo1.visible = true;
    }
    k(){
        this.textoAtributo1.visible = false;
    }
}