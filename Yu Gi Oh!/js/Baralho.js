class Baralho
{
    constructor()
    {
         this.cartas = new Array();
    }
   
    iniciarBaralho()    
    {
//1
        carta = new Carta();
        carta.altura  = 1.89;
        carta.peso = 74;
        carta.forca = 950;
        carta.velocidade = 130;
        carta.peleasGanadas = 799;
        carta.nome = "Cyclope";
        carta.imagem = 0;
        this.cartas.push(carta)

        carta = new Carta();
        carta.altura  = 1.76;
        carta.peso = 62;
        carta.forca = 625;
        carta.velocidade = 45;
        carta.peleasGanadas = 4;
        carta.nome = "El Acertijo";
        carta.imagem = 1;
        this.cartas.push(carta)

        carta = new Carta();
        carta.altura  = 1.76;
        carta.peso = 55;
        carta.forca = 320;
        carta.velocidade = 180;
        carta.peleasGanadas = 816;
        carta.nome = "Batichica";
        carta.imagem = 2;
        this.cartas.push(carta)

        carta = new Carta();
        carta.altura  = 1.88;
        carta.peso = 82;
        carta.forca = 1000;
        carta.velocidade = 350;
        carta.peleasGanadas = 745;
        carta.nome = "Motoqueiro Fantasma";
        carta.imagem = 3;
        this.cartas.push(carta)

        carta = new Carta();
        carta.altura  = 1.79;
        carta.peso = 132;
        carta.forca = 757;
        carta.velocidade = 876;
        carta.peleasGanadas = 526;
        carta.nome = "Rayo De Prata";
        carta.imagem = 4;
        this.cartas.push(carta)

        var carta = new Carta();
        carta.altura  = 3.20;
        carta.peso = 450;
        carta.forca = 2400;
        carta.velocidade = 400;
        carta.peleasGanadas = 63;
        carta.nome = "Abominavel";
        carta.imagem = 5;
        this.cartas.push(carta)

        carta = new Carta();
        carta.altura  = 1.74;
        carta.peso = 62;
        carta.forca = 800;
        carta.velocidade = 155;
        carta.peleasGanadas = 834;
        carta.nome = "super chica";
        carta.imagem = 6;
        this.cartas.push(carta)  

        carta = new Carta();
        carta.altura  = 1.80;
        carta.peso = 200;
        carta.forca = 805;
        carta.velocidade = 76;
        carta.peleasGanadas = 7;
        carta.nome = "Brainiac";
        carta.imagem = 7;
        this.cartas.push(carta)

        carta = new Carta();
        carta.altura  = 3.50;
        carta.peso = 408;
        carta.forca = 3000;
        carta.velocidade = 300;
        carta.peleasGanadas = 280;
        carta.nome = "Onslaught";
        carta.imagem = 8;
        this.cartas.push(carta)

        carta = new Carta();
        carta.altura  = 2.30;
        carta.peso = 312;
        carta.forca = 2000;
        carta.velocidade = 350;
        carta.peleasGanadas = 1000;
        carta.nome = "DoomsDay";
        carta.imagem = 9;
        this.cartas.push(carta)

        carta = new Carta();
        carta.altura  = 2.30;
        carta.peso = 369;
        carta.forca = 1654;
        carta.velocidade = 785;
        carta.peleasGanadas = 36;
        carta.nome = "Monstro";
        carta.imagem = 10;
        this.cartas.push(carta)
        
        carta = new Carta();
        carta.altura  = 1.70;
        carta.peso = 60;
        carta.forca = 302;
        carta.velocidade = 100;
        carta.peleasGanadas = 436;
        carta.nome = "Gata Negra";
        carta.imagem = 11;
        this.cartas.push(carta)
        
        carta = new Carta();
        carta.altura  = 1.88;
        carta.peso = 92;
        carta.forca = 980;
        carta.velocidade = 200;
        carta.peleasGanadas = 63;
        carta.nome = "Hombre de Arena";
        carta.imagem = 12;
        this.cartas.push(carta)
        
        carta = new Carta();
        carta.altura  = 1.89;
        carta.peso = 105;
        carta.forca = 1000;
        carta.velocidade = 800;
        carta.peleasGanadas = 632;
        carta.nome = "Namoor";
        carta.imagem = 13;
        this.cartas.push(carta)
              
        carta = new Carta();
        carta.altura  = 1.76;
        carta.peso = 56;
        carta.forca = 315;
        carta.velocidade = 105;
        carta.peleasGanadas = 836;
        carta.nome = "Mulher Aranha";
        carta.imagem = 14;
        this.cartas.push(carta)
        
        carta = new Carta();
        carta.altura  = 1.85;
        carta.peso = 107;
        carta.forca = 1056;
        carta.velocidade = 92;
        carta.peleasGanadas = 871;
        carta.nome = "Phantro";
        carta.imagem = 15;
        this.cartas.push(carta) 

    }
    sortear()
    { 
        
        var i = Math.trunc(Math.random() * this.cartas.length);
        var carta = this.cartas[i];
        this.cartas.splice(i, 1);
        return carta;

       
    }
    sortear1()
    { 
        
        var i = Math.trunc(Math.random() * this.cartas.length);
        var carta = this.cartas[i];
        this.cartas.splice(i, 1);
        return carta;

       
    }
    
}